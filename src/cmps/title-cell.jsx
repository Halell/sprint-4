import { TaskEdit } from './task-edit'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { ActivityModal } from './modal-cmp'
import { ReactComponent as Updates } from '../assets/svg/updates.svg'
import { ReactComponent as Msg } from '../assets/svg/msg.svg'

export function TitleCell({ task, onUpdateTask, group, onSetIsModalOpen }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isDetailesModalOpen, setIsDetailesModalOpen] = useState(false)
    const [isUpdateOpen, setUpdateOpen] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const newUpdates = task.updates.filter(update => update.isRead !== true)

    const toggle = (val, ev) => {
        if (ev) ev.stopPropagation()
        if (val === 'btn-input') {
            setIsBtnInputOpen(!isBtnInputOpen)
        }
        if (val === 'details-modal') {
            setIsDetailesModalOpen(!isDetailesModalOpen)
        }
    }



    const handleKeyPress = (ev) => {
        // ev.preventDefault()
        const createdAt = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
        if (ev.key === 'Enter') {
            const newUpdate = {
                byMember: {
                    fullname: "Carmel Yona",
                    imgUrl: "",
                    _id: "userId",
                    createdAt: createdAt
                },
                text: ev.target.innerText,
            }
            setUpdateOpen(false)
            task.updates.push(newUpdate)
            onUpdateTask(task, group.id)
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
                                    {!task.updates.length ?
                                        <Updates className="update-svg" title="Start conversation" onClick={() => toggle('details-modal')} />
                                        :
                                        <div className="add-update-btn-wrapper flex">
                                            <Msg className="msg-svg" />
                                            <div className="update-num" onClick={(ev) => toggle('details-modal')}>{newUpdates.length}</div>
                                        </div>
                                    }
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
                            <div onClick={() => setIsShown(true)} className={`activity-tab ${isShown ? 'shown' : ''}`}>Activity</div>
                            <div onClick={() => setIsShown(false)} className={`update-tab  ${isShown ? '' : 'shown'}`}>Updates</div>
                            {/* <div className="divider"></div> */}
                        </div>
                    </div>
                    <div className={`update-wrapper flex column  ${isShown ? '' : 'shown'} `}>
                        {isUpdateOpen ?
                            <div suppressContentEditableWarning={true}
                                contentEditable={true}
                                onBlur={handleKeyPress}
                                onKeyPress={handleKeyPress}
                                className="btn-input">
                            </div>
                            :
                            <div className="btn-input" onClick={() => setUpdateOpen(true)}>
                                Write an update..
                            </div>}

                        <div className="updates-wrapper-cards flex column">
                            {task.updates.map((update, idx) =>
                                <div className="update-card" key={idx}>
                                    <div className="update-header flex">{update.byMember.fullname}</div>
                                    <div className="body-text">{update.text}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`activity-log-wrapper flex column ${isShown ? 'shown' : ''}`}>
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
