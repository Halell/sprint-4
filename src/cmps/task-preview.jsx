import { TaskEdit } from './task-edit'
import { useState } from 'react'


export function TaskPreview({ board, task, onUpdateTask, group, onRemoveTask }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }
    // console.log(task)
    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <div className="title-container">
                    <div className="btn-pulse-menu">◉</div>
                    <div className="title-inner-container">
                        <div className="title-inner-wrapper">
                            <div className="cell-component title-cell"  >
                                <div className="title-cell-component">
                                    <div className="pulse-left-indicator"></div>
                                    <div className="title-cell-text">
                                        <div className="edit-icon-wrapper"></div>
                                        <div className="title-component"></div>
                                    </div>
                                    <div className="conversation-indicator-component"></div>
                                    {isBtnInputOpen ?
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cells-row-container">
                    <div className="cells-row-component">
                        {board.columns.map((column, idx) =>
                            <div className="cell-component-wrapper" key={idx} >
                                <div className="cell-component-inner">
                                    <div className="cell-component">
                                        {column}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="column-wrapper-add"></div>
            </div>
        </div>
    )
}

{/* <button onClick={() => onRemoveTask(group.id, task.id)} className="btn-side-task">🗑</button> */ }













