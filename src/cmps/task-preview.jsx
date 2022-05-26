

export function TaskPreview({ task }) {
    // console.log(task)
    return (
        <div className="task-preview">

            { task && task.title }
            <button className=" edit-btn">Edit</button>
        </div>
    )
}