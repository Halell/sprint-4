

export function TaskPreview({ task, onAddTask }) {
    // console.log(task)
    return (
        <div className="task-preview">
            <hr />
            {task && task.title}
            <button onClick={() => onAddTask()} className=" edit-btn">Edit</button>
        </div>
    )
}