import { TaskPreview } from './task-preview'

export function TaskList({ group, onAddTask, columns }) {

    return (
        <div className="task-list">
            { group.tasks.map((task, idx) =>
                <TaskPreview
                    onAddTask={ onAddTask }
                    task={ task }
                    key={ idx }
                    columns={ columns }
                />) }
        </div>
    )
}