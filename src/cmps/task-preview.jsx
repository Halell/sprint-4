import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { AiOutlineDelete } from 'react-icons/ai'

import { TaskEdit } from './task-edit'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask }) => {
    const [statusBgcColor, setStatusBgcColor] = useState('')
    const [importanceBgcColor, setImportanceBgcColor] = useState('')
    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setStatus(task.importance, 'importance')
        setStatus(task.status, 'status')
    }, [])
    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }

    const onSetIsModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }
    const setMember = (member) => {
        task.persons.push(member.fullname)
        onUpdateTask(task, group.id)
    }

    const setTxt = (el) => {
        task.text = el.target.innerText
        onUpdateTask(task, group.id)
    }
    const setStatus = (val, field) => {
        var color = 'rgb(173, 150, 122)'
        if (val === 'done' || val === 'high') color = 'rgb(0, 200, 117)'
        if (val === 'in-progress' || val === 'mid') color = 'rgb(253, 171, 61)'
        if (val === 'stuck' || val === 'low') color = 'rgb(226, 68, 92)'
        // if (val === 'no-status' || val === 'very-low') color = 'rgb(173, 150, 122)'
        task[field] = val
        onUpdateTask(task, group.id)
        field === 'status' ? setStatusBgcColor(color) : setImportanceBgcColor(color)
    }

    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    onSetIsModalOpen={ onSetIsModalOpen }
                    task={ task }
                    onUpdateTask={ onUpdateTask }
                    group={ group }
                />
                <div className="cells-row-container">
                    <div className="cells-row-component">
                        { board.columns && board.columns.map((boardColumn, idx) =>
                            <div className="cell-component-wrapper" key={ idx }>
                                <div className="cell-component-inner">
                                    <div className={ `cell-component ${boardColumn}` } >
                                        <TaskColumn
                                            setStatus={ setStatus }
                                            boardColumn={ boardColumn }
                                            task={ task }
                                            importanceBgcColor={ importanceBgcColor }
                                            statusBgcColor={ statusBgcColor }
                                            setTxt={ setTxt }
                                            board={ board }
                                            setMember={ setMember }
                                        />
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
                <div className="column-wrapper-add"></div>
            </div>
            { isModalOpen &&
                <div className='task-modal-menu'>
                    <div color='task-btns-modal-open'>
                        <div className='task-btn-crud'><HiOutlineDocumentDuplicate />Duplicate</div>
                        <div onClick={ () => onRemoveTask(group.id, task.id) } className='task-btn-crud'><AiOutlineDelete />Delete</div>
                    </div>
                </div>
            }
        </div>
    )
}

{/* <button onClick={() => onRemoveTask(group.id, task.id)} className="btn-side-task">🗑</button> */ }













