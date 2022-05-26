import { TaskEdit } from './task-edit'



export function TaskPreview({ task }) {
    return (
        <div className="task-preview">
            <hr />
            <div className="btn-side-task">🗑</div>
            {task && task.title}
            <button onClick={<TaskEdit />} className=" edit-btn">Edit</button>
        </div>
    )
}