import { TaskEdit } from './task-edit'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask }) => {
    const [bgColor, setBgColor] = useState('')
    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isStatusEdit, setIsEdit] = useState(false)
    const [isImportanceEdit, setIsImportanceEdit] = useState(false)

    useEffect(() => {
        setStatus(task.status)
    }, [])

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }

    const setColumn = (val) => {
        if (val === 'status') {
            openStatusModal()
        }
        if (val === 'importance') {
            openImportanceModal()
        }
    }

    const openImportanceModal = () => {
        // console.log('impo')

    }

    const setStatus = (val) => {

        if (val === 'done') {
            task.status = val
            onUpdateTask(task, group.id)
            setBgColor('rgb(0, 200, 117)')
        }
        if (val === 'in progress') {
            task.status = val
            onUpdateTask(task, group.id)
            setBgColor('rgb(253, 171, 61)')
        }
        if (val === 'stuck') {
            task.status = val
            onUpdateTask(task, group.id)
            setBgColor('rgb(226, 68, 92)')
        }
        if (val === 'no-status') {
            task.status = val
            onUpdateTask(task, group.id)
            setBgColor('grey')
        }
    }
    const openStatusModal = () => {
        setIsEdit(isStatusEdit ? false : true)
    }
    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    task={ task }
                    onUpdateTask={ onUpdateTask }
                    group={ group }
                />

                <div className="cells-row-container">
                    <div className="cells-row-component">
                        { board.columns && board.columns.map((column, idx) =>
                            <div className="cell-component-wrapper" key={ idx }>
                                <div className="cell-component-inner">
                                    <div className={ "cell-component" } >
                                        <TaskColumn
                                            setStatus={ setStatus }
                                            column={ column }
                                            task={ task }
                                            setColumn={ setColumn }
                                            isStatusEdit={ isStatusEdit }
                                            bgColor={ bgColor }
                                        />
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
                <div className="column-wrapper-add"></div>
            </div>
        </div>
    )
}

{/* <button onClick={() => onRemoveTask(group.id, task.id)} className="btn-side-task">🗑</button> */ }













