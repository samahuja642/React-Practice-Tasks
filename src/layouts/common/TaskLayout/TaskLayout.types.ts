import type { ReactNode } from "react";

export interface TaskLayoutProps {
    sectionHeading: string;
    taskNumber?: string;
    children: ReactNode;
}