import { TaskEdit } from './task-edit'
import { useState } from 'react'

export function TitleCell({ task, onUpdateTask, group }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }

    return (
        <div className="title-container">
            <div className="btn-pulse-menu-wrapper">
                <div className="btn-pulse-menu"></div>
            </div>
            <div className="title-inner-container">
                <div className="title-inner-wrapper">
                    <div className="cell-component title-cell" >
                        <div className="title-cell-component">
                            <div className="pulse-left-indicator"/*{ enter color obj here } */></div>
                            <div className="title-cell-text">
                                <div className="title-component">
                                    { isBtnInputOpen ?
                                        <div className="title-component">
                                            <div className="edit-icon-wrapper">
                                                <button className="btn  edit-icon" onClick={ () => toggle('btn-input') } >Edit</button>
                                            </div>
                                            < div className='btn-input'>
                                                { task && task.title }
                                            </div>
                                        </div>
                                        :
                                        < div className='btn-input' >
                                            <TaskEdit
                                                group={ group }
                                                task={ task }
                                                onUpdateTask={ onUpdateTask }
                                                toggle={ toggle }
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
        </div >
    )
}