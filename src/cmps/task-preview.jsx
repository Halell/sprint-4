

export function TaskPreview({ task, onAddTask }) {
    return (
        <div className="task-preview">
            <hr />
            {task.title}
        </div>
    )
}