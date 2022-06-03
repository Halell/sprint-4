import { TaskEdit } from './task-edit'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { ActivityModal } from './modal-cmp'

export function TitleCell({ task, onUpdateTask, group, onSetIsModalOpen }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isDetailesModalOpen, setIsDetailesModalOpen] = useState(false)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(!isBtnInputOpen)
        }
        if (val === 'details-modal') {
            console.log(': ffrgrth')
            setIsDetailesModalOpen(!isDetailesModalOpen)
        }
    }

    return (
        <div className="title-container">
            <div className="btn-pulse-menu-wrapper">
                <div onClick={onSetIsModalOpen} className="btn-pulse-menu">
                </div>
            </div>
            <div className="title-inner-container">
                <div className="title-inner-wrapper">
                    <div className="cell-component title-cell" >
                        <div className="title-cell-component" onClick={() => toggle('details-modal')}>

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
            {isDetailesModalOpen &&
                <div className="activity-log-panel flex">
                    <div className="activity-log-header ">
                        <div onClick={() => toggle('details-modal')} className="activity-log-close-btn"><GrClose /></div>
                        <div className="activity-title flex">{task.title} log</div>
                        <div className="tabs-wrapper flex">
                            <div className="activity-tab ">Activity</div>
                            <div className="activity-tab">Updates</div>
                        </div>
                    </div>
                    {task.activities && task.activities.map((activity, idx) => {
                        return <ActivityModal activity={activity} key={idx} />
                    })
                    }
                </div>
            }
        </div >
    )
}
