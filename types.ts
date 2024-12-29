export interface TrimSection {
    startY: number;
    endY: number;
    imageIndex: number;
    id: number;
}

export interface ImagesTrimmingToolProps {
    images: string[];
    onSave?: ({ trimSections, canvasRefs }: { trimSections: TrimSection[], canvasRefs: (HTMLCanvasElement | null)[] }) => void;
    onTrim?: () => void;
    onRevert?: () => void;
    width?: number;
    selectionColor?: string;
    selectionBorder?: string;
    activeSelectionColor?: string;
    activeSelectionBorder?: string;
}

export interface AdjustCoordinatesResult {
    start: number;
    end: number;
    shouldCreate: boolean;
}