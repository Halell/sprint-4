import { TaskEdit } from './task-edit'
import { useState } from 'react'



export function TaskPreview({ task, onUpdateTask, group, onRemoveTask }) {
    const [isBtnInoutOpen, setIsBtnInputOpen] = useState(true)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInoutOpen ? false : true)
        }
    }

    return (
        <div className="task-preview">
            <hr />
            <div onClick={onRemoveTask} className="btn-side-task">🗑</div>
            {isBtnInoutOpen ?
                < div className='btn-input'>
                    {task && task.title}
                    <button onClick={() => toggle('btn-input')} className=" edit-btn">Edit</button>
                </div>
                :
                < div className='btn-input' >
                    <TaskEdit
                        group={group}
                        task={task}
                        onUpdateTask={onUpdateTask}
                        toggle={toggle}
                    />
                </div>
            }
        </div >
    )
}