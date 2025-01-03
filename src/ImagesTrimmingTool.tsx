import { useEffect, useState, useRef } from 'react';
import { AdjustCoordinatesResult, ImagesTrimmingToolProps, TrimSection } from '../types';
const ImagesTrimmingTool: React.FC<ImagesTrimmingToolProps> = ({
  images = [],
  onSave = () => { },
  onTrim = () => { },
  onRevert = () => { },
  width = 400,
  selectionColor = 'rgba(255, 0, 0, 0.3)',
  selectionBorder = '2px dotted red',
  activeSelectionColor = 'rgba(0, 0, 255, 0.3)',
  activeSelectionBorder = '1px solid pink'
}: ImagesTrimmingToolProps): React.JSX.Element => {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const [scaledWidthRatio, setScaledWidthRatio] = useState<number>(2);
  const [trimSections, setTrimSections] = useState<TrimSection[]>([]);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [outputSrc, setOutputSrc] = useState<boolean[]>(Array(images.length).fill(false));
  const [startImageIndex, setStartImageIndex] = useState<number | null>(null);
  const [startY, setStartY] = useState<number>(0);
  const [endY, setEndY] = useState<number>(0);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [resizingId, setResizingId] = useState<number | null>(null);
  const [resizeHandle, setResizeHandle] = useState<'top' | 'bottom' | null>(null);
  const [isTrimmed, setIsTrimmed] = useState<boolean>(false);

  const clampToImageBounds = (value: number): number => {
    const IMAGE_HEIGHT = 500000;
    return Math.max(0, Math.min(value, IMAGE_HEIGHT));
  };

  const getImageSize = (imageSrc: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
      img.onerror = (err) => {
        reject('Error loading image: ' + err);
      };
      img.src = imageSrc;
    });
  };


  useEffect(() => {
    async function loadImage() {
      try {
        const sizes = await getImageSize(images[0]);
        setScaledWidthRatio(sizes.width / width);
      } catch (error) {
        alert("Error loading images,check console.")
        console.log("Error loading images:", error);
      }
    }
    loadImage()
  }, [images])

  const adjustCoordinatesForOverlap = (
    newStartY: number,
    newEndY: number,
    imageIndex: number,
    excludeId: number | null = null
  ): AdjustCoordinatesResult => {
    const clampedStartY = clampToImageBounds(newStartY);
    const clampedEndY = clampToImageBounds(newEndY);

    const overlappingSelections = trimSections.filter(s =>
      s.imageIndex === imageIndex && (excludeId === null || s.id !== excludeId)
    );

    let adjustedStart = clampedStartY;
    let adjustedEnd = clampedEndY;
    let shouldCreate = true;

    for (const selection of overlappingSelections) {
      if (clampedStartY <= selection.startY && clampedEndY >= selection.endY) {
        shouldCreate = false;
        break;
      }

      if (clampedStartY >= selection.startY && clampedStartY <= selection.endY) {
        adjustedStart = selection.endY + 1;
      }

      if (clampedEndY >= selection.startY && clampedEndY <= selection.endY) {
        adjustedEnd = selection.startY - 1;
      }
    }

    adjustedStart = clampToImageBounds(adjustedStart);
    adjustedEnd = clampToImageBounds(adjustedEnd);

    return {
      start: adjustedStart,
      end: adjustedEnd,
      shouldCreate: shouldCreate && adjustedStart < adjustedEnd
    };
  };

  const trimImage = (
    imageSrc: string,
    sections: TrimSection[],
    canvas: HTMLCanvasElement,
    setOutput: (value: boolean) => void
  ): void => {
    const sortedSections = [...sections].sort((a, b) => {
      if (a.imageIndex === b.imageIndex) {
        return a.startY - b.startY;
      }
      return a.imageIndex - b.imageIndex;
    });

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();

    image.onload = () => {
      const { width: imgWidth, height } = image;
      const relevantSections = sortedSections.map(({ startY, endY }) => [
        startY * scaledWidthRatio,
        endY * scaledWidthRatio,
      ] as [number, number]);

      let totalHeight = height;
      relevantSections.forEach(([startY, endY]) => {
        totalHeight -= endY - startY;
      });

      canvas.width = imgWidth;
      canvas.height = totalHeight;

      let currentY = 0;
      relevantSections.unshift([0, 0]);
      relevantSections.push([height, height]);

      for (let i = 1; i < relevantSections.length; i++) {
        const prevEndY = relevantSections[i - 1][1];
        const [startY] = relevantSections[i];
        const sectionHeight = startY - prevEndY;

        if (sectionHeight > 0) {
          ctx.drawImage(
            image,
            0,
            prevEndY,
            imgWidth,
            sectionHeight,
            0,
            currentY,
            imgWidth,
            sectionHeight
          );
          currentY += sectionHeight;
        }
      }
      setOutput(true);
      setIsTrimmed(true);
    };

    image.src = imageSrc;
  };

  const handleTrimAll = (): void => {
    images.forEach((imageSrc, index) => {
      const canvas = canvasRefs.current[index];
      if (!canvas) return;

      const sections = trimSections.filter((section) => section.imageIndex === index);

      trimImage(imageSrc, sections, canvas, (value) => {
        setOutputSrc((prev) => {
          const newOutput = [...prev];
          newOutput[index] = value;
          return newOutput;
        });
      });
    });
    onTrim()
  };

  const handleRevertChanges = (): void => {
    setOutputSrc(Array(images.length).fill(false));
    setIsTrimmed(false);
    onRevert();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>, imageIndex: number): void => {
    setStartImageIndex(imageIndex);
    setIsSelecting(true);
    const pageElement = document.getElementById(`page-${imageIndex}`);
    if (!pageElement) return;

    const rect = pageElement.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setStartY(clampToImageBounds(y));
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isSelecting && !isResizing) return;

    if (isResizing && resizingId !== null) {
      const selection = trimSections.find(s => s.id === resizingId);
      if (!selection) return;

      const pageElement = document.getElementById(`page-${selection.imageIndex}`);
      if (!pageElement) return;

      const rect = pageElement.getBoundingClientRect();
      const newY = clampToImageBounds(e.clientY - rect.top);

      setTrimSections(prev => prev.map(s => {
        if (s.id === resizingId) {
          let newStartY = s.startY;
          let newEndY = s.endY;

          if (resizeHandle === 'top') {
            const adjusted = adjustCoordinatesForOverlap(
              Math.min(newY, s.endY),
              s.endY,
              s.imageIndex,
              resizingId
            );
            newStartY = adjusted.start;
          } else if (resizeHandle === 'bottom') {
            const adjusted = adjustCoordinatesForOverlap(
              s.startY,
              Math.max(newY, s.startY),
              s.imageIndex,
              resizingId
            );
            newEndY = adjusted.end;
          }

          return { ...s, startY: newStartY, endY: newEndY };
        }
        return s;
      }));
    } else if (isSelecting && startImageIndex !== null) {
      const pageElement = document.getElementById(`page-${startImageIndex}`);
      if (!pageElement) return;

      const rect = pageElement.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      const constrainedY = Math.max(0, Math.min(mouseY, rect.height));
      setEndY(clampToImageBounds(constrainedY));
    }
  };

  const handleMouseUp = (e: MouseEvent): void => {
    if (isResizing) {
      setIsResizing(false);
      setResizingId(null);
      setResizeHandle(null);
    } else if (isSelecting && startImageIndex !== null) {
      setIsSelecting(false);

      const pageElement = document.getElementById(`page-${startImageIndex}`);
      if (!pageElement) return;

      const rect = pageElement.getBoundingClientRect();
      const finalY = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
      const clampedFinalY = clampToImageBounds(finalY);

      const minY = Math.min(startY, clampedFinalY);
      const maxY = Math.max(startY, clampedFinalY);

      const adjusted = adjustCoordinatesForOverlap(minY, maxY, startImageIndex);

      if (adjusted.shouldCreate) {
        setTrimSections((prev) => [
          ...prev,
          {
            startY: adjusted.start,
            endY: adjusted.end,
            imageIndex: startImageIndex,
            id: Date.now()
          },
        ]);
      }

      setStartImageIndex(null);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = (e: MouseEvent) => handleMouseUp(e);
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelecting, isResizing, resizingId, resizeHandle, startImageIndex, startY]);

  const renderSelectionBox = (selection: TrimSection): React.JSX.Element => {
    const { startY, endY, id } = selection;
    const height = endY - startY;

    const handleDelete = (e: React.MouseEvent): void => {
      e.stopPropagation();
      setTrimSections((prev) => prev.filter((s) => s.id !== id));
    };

    const handleResizeStart = (e: React.MouseEvent, id: number, handle: 'top' | 'bottom'): void => {
      e.stopPropagation();
      setIsResizing(true);
      setResizingId(id);
      setResizeHandle(handle);
    };

    return (
      <div
        key={id}
        className="selection-box"
        style={{
          position: 'absolute',
          left: 0,
          top: `${startY}px`,
          width: `${width - 4}px`,
          height: `${height}px`,
          backgroundColor: selectionColor,
          border: selectionBorder,
          pointerEvents: 'none',
        }}
      >
        <div
          className="resize-handle top"
          style={{
            position: 'absolute',
            top: '-4px',
            left: 0,
            width: '100%',
            height: '8px',
            cursor: 'ns-resize',
            backgroundColor: 'transparent',
            pointerEvents: 'auto',
          }}
          onMouseDown={(e) => handleResizeStart(e, id, 'top')}
        />
        <div
          className="resize-handle bottom"
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: 0,
            width: '100%',
            height: '8px',
            cursor: 'ns-resize',
            backgroundColor: 'transparent',
            pointerEvents: 'auto',
          }}
          onMouseDown={(e) => handleResizeStart(e, id, 'bottom')}
        />
        <button
          className="delete-button"
          style={{
            position: 'absolute',
            right: '2px',
            top: '7px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            pointerEvents: 'auto',
            zIndex: 10,
            padding: '0px',
            backgroundColor: 'transparent',
            border: "transparent",
            borderRadius: '4px',
            fontSize: '18px'
          }}
          onClick={handleDelete}
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <div className="image-trimmer" style={{ width }}>
      <div className="controls" style={{ padding: "12px", display: "flex", position: "fixed", top: 0, zIndex: 10, width: `${width}px`, justifyContent: "space-around", background: "white" }}>
        {!isTrimmed ? (
          trimSections.length > 0 && (
            <>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete all selections?")) {
                    setTrimSections([]);
                  }
                }}
                className="delete-all"
              >
                Delete All
              </button>
              <button onClick={handleTrimAll} className="trim-all">
                Trim ({trimSections.length})
              </button>
            </>
          )
        ) : (
          <>
            <button onClick={handleRevertChanges} className="revert">
              Revert
            </button>
            <button
              onClick={() => {
                if (canvasRefs.current && onSave) {
                  const scaledTrimSections = trimSections.map((section) => ({
                    ...section,
                    startY: section.startY * scaledWidthRatio,
                    endY: section.endY * scaledWidthRatio,
                  }))
                  onSave({
                    trimSections: scaledTrimSections,
                    canvasRefs: canvasRefs.current
                  });
                }
              }}
              className="save"
            >
              Save
            </button>
          </>
        )}
      </div>

      <div style={{ userSelect: "none", paddingTop: "50px" }} className="images-container">
        {images.map((imageSrc, index) => (
          <div key={index} id={`page-${index}`} className="image-wrapper">
            <canvas
              ref={(el) => { canvasRefs.current[index] = el }}
              style={{
                height: "auto",
                width: `${width}px`,
                display: outputSrc[index] ? "inherit" : "none",
              }}
            />
            {!outputSrc[index] && (
              <div style={{ position: 'relative' }}>
                {trimSections.map((selection) =>
                  selection.imageIndex === index && renderSelectionBox(selection)
                )}
                <img
                  src={imageSrc}
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  alt={`Original ${index + 1}`}
                  style={{
                    height: "auto",
                    width: `${width}px`,
                    cursor: "crosshair",
                    background: "red",
                    marginBottom: "-4px"
                  }}
                  draggable={false}
                />
                {isSelecting && startImageIndex === index && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      zIndex: "20",
                      top: `${Math.min(startY, endY)}px`,
                      width: `${width}px`,
                      height: `${Math.abs(endY - startY)}px`,
                      backgroundColor: activeSelectionColor,
                      border: activeSelectionBorder,
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesTrimmingTool;