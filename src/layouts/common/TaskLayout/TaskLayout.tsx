import type { TaskLayoutProps } from "./TaskLayout.types";

export default function TaskLayout({sectionHeading,taskNumber,children}:TaskLayoutProps){
     return (
            <section>
                <header>
                    <h2>{sectionHeading}</h2>
                    <h3>Task Number: {taskNumber}</h3>
                </header>
                <main>
                    {children}
                </main>
            </section>
        );
}