

export function TaskPreview({ task }) {
    console.log(task)
    return (
        <div>
            <hr />
            {task && task.title}
        </div>
    )
}