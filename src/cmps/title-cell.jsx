import { TaskEdit } from './task-edit'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { ActivityModal } from './modal-cmp'
import { ReactComponent as Updates } from '../assets/svg/updates.svg'

export function TitleCell({ task, onUpdateTask, group, onSetIsModalOpen }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isDetailesModalOpen, setIsDetailesModalOpen] = useState(false)
    const toggle = (val, ev) => {
        if (ev) ev.stopPropagation()
        if (val === 'btn-input') {
            setIsBtnInputOpen(!isBtnInputOpen)
        }
        if (val === 'details-modal') {
            console.log(': ffrgrth')
            setIsDetailesModalOpen(!isDetailesModalOpen)
        }
    }

    return (
        <>
            <div className="title-container">
                <div className="btn-pulse-menu-wrapper">
                    <div onClick={onSetIsModalOpen} className="btn-pulse-menu">
                    </div>
                </div>
                <div className="title-inner-container">
                    <div className="title-inner-wrapper">
                        <div className="cell-component title-cell" >
                            <div className="title-cell-component" onClick={() => toggle('details-modal')}>

                                <div className="pulse-left-indicator" style={{ backgroundColor: group.style }}></div>
                                <div className="title-cell-text flex">

                                    <div className="title-component">
                                        {isBtnInputOpen ?
                                            <div className="title-component">
                                                <div className="edit-icon-wrapper">
                                                    <button className="btn  edit-icon" onClick={(ev) => toggle('btn-input', ev)} >Edit</button>
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
                                    <Updates title="Start conversation" onClick={() => toggle('details-modal')} />
                                </div>
                                <div className="conversation-indicator-component"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {isDetailesModalOpen &&
                <div className="activity-log-panel flex">
                    <div className="activity-log-header ">
                        <div onClick={() => toggle('details-modal')} className="activity-log-close-btn"><GrClose /></div>
                        <div className="activity-title flex">{task.title} log</div>
                        <div className="tabs-wrapper flex">
                            <div className="activity-tab ">Activity</div>
                            <div className="activity-tab ">Updates</div>
                        </div>
                    </div>
                    <div className="update-wrapper flex column">
                        <div className="btn-input">Write an update..</div>
                        <div className='item-updates-container'>
                            <div>
                                <div>
                                    <textarea style={{ display: 'none' }} name="" id="" cols="30" rows="10"></textarea>
                                    <div className='main-input'>
                                        <div className='text-editor-container'>
                                            <div className='text-editor-header'>
                                                <div className='tool-bar'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="activity-log-wrapper flex column">
                        {task.activities && task.activities.map((activity, idx) => {
                            return <ActivityModal activity={activity} key={idx} />
                        })
                        }
                    </div>
                </div>
            }
        </>
    )
}
