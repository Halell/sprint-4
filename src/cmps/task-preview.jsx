

export function TaskPreview({ task, onAddTask }) {
    return (
        <div className="task-preview">
            <hr />
            {task.title}
            {/* {isOpen ?
                <ptask.title</p>
                :
                <button onClick={() => onAddTask()} className=" edit-btn">Edit</button>
            } */}
        </div>
    )
}