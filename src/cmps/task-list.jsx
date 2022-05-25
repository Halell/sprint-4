import { TaskPreview } from './task-preview'

export function TaskList({ group }) {

    return (
        <div className="task-list">
            {group.tasks.map((task, idx) => <TaskPreview task={task} key={idx} />)}
        </div>
    )
}