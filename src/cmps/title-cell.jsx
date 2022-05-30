import { TaskEdit } from './task-edit'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';




export function TitleCell({ task, onUpdateTask, group }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [isDetailesModalOpen, setIsDetailesModalOpen] = useState(false)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
        if (val === 'task-modal') {
            setIsTaskModalOpen(isTaskModalOpen ? false : true)
        }
        if (val === 'details-modal') {
            console.log(': ffrgrth');
            setIsDetailesModalOpen(isDetailesModalOpen ? false : true)
        }
    }

    return (

        <div className="title-container">
            <div className="btn-pulse-menu-wrapper">
                <div onClick={() => toggle('task-modal')} className="btn-pulse-menu">
                </div>
            </div>
            <div className="title-inner-container">
                <div className="title-inner-wrapper">
                    <div className="cell-component title-cell" >
                        <div onClick={() => toggle('details-modal')} className="title-cell-component">
                            {isDetailesModalOpen &&
                                <div className='detailes-main-modal-wrapper'>
                                    <div className='activity-header'>
                                        <div className='activity-close-btn'><GrClose /></div>
                                        <div className='activity-title'>New item</div>
                                        <div className='activity-btns'>
                                            <div className='activity-btn-update'>Update</div>
                                            <div className='activity-btn-log'>Activity Log</div>
                                        </div>
                                    </div>
                                    <div className='main-body-modal'>
                                        <div className='item-update-content'></div>
                                    </div>
                                </div>
                            }
                            <div className="pulse-left-indicator"/*{ enter color obj here } */></div>
                            <div className="title-cell-text">
                                <div className="title-component">
                                    {isBtnInputOpen ?
                                        <div className="title-component">
                                            <div className="edit-icon-wrapper">
                                                <button className="btn  edit-icon" onClick={() => toggle('btn-input')} >Edit</button>
                                            </div>
                                            < div className='btn-input'>
                                                {task && task.title}
                                            </div>
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
                            <div className="conversation-indicator-component"></div>

                        </div>
                    </div>
                </div>
            </div>
            {isTaskModalOpen &&
                <div className='task-modal-menu'>
                    <div color='task-btns-modal-open'>
                        <div className='task-btn-crud'><HiOutlineDocumentDuplicate />Duplicate</div>
                        <hr />
                        <div className='task-btn-crud'><AiOutlineDelete />Delete</div>
                    </div>
                </div>
            }
        </div >
    )
}
// {isTaskModalOpen &&
//     <div>bob</div>
// }