

export function TaskPreview({ task, onAddTask }) {
    return (
        <div className="task-preview">
            <hr />
            {task && task.title}
            <button onClick={() => onAddTask()} className=" edit-btn">Edit</button>
        </div>
    )
}