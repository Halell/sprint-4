import { TaskEdit } from './task-edit'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask }) => {
    const [statusBgcColor, setStatusBgcColor] = useState('')
    const [importanceBgcColor, setImportanceBgcColor] = useState('')
    const [isImportanceEdit, setIsImportanceEdit] = useState(false)
    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isStatusEdit, setIsEdit] = useState(false)
    const [isDateEdit, setIsDateEdit] = useState(false)
    const [startdate, setStartDate] = useState(new Date())

    useEffect(() => {
        setStatus(task.importance)
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

    const setTxt = (el) => {
        task.text = el.target.innerText
        onUpdateTask(task, group.id)
    }



    const setStatus = (val) => {

        //set status:
        if (val === 'done') {
            task.status = val
            onUpdateTask(task, group.id)
            setStatusBgcColor('rgb(0, 200, 117)')
        }
        if (val === 'in-progress') {
            task.status = val
            onUpdateTask(task, group.id)
            setStatusBgcColor('rgb(253, 171, 61)')
        }
        if (val === 'stuck') {
            task.status = val
            onUpdateTask(task, group.id)
            setStatusBgcColor('rgb(226, 68, 92)')
        }
        if (val === 'no-status') {
            task.status = val
            onUpdateTask(task, group.id)
            setStatusBgcColor('rgb(173, 150, 122)')
        }

        //set imporatnce:
        if (val === 'high') {
            task.importance = val
            onUpdateTask(task, group.id)
            setImportanceBgcColor('rgb(0, 200, 117)')
        }
        if (val === 'mid') {
            task.importance = val
            onUpdateTask(task, group.id)
            setImportanceBgcColor('rgb(253, 171, 61)')
        }
        if (val === 'low') {
            task.importance = val
            onUpdateTask(task, group.id)
            setImportanceBgcColor('rgb(226, 68, 92)')
        }
        if (val === 'no-importance') {
            task.importance = val
            onUpdateTask(task, group.id)
            setImportanceBgcColor('rgb(173, 150, 122)')
        }

    }


    const openDateModal = () => {
        setIsDateEdit(isDateEdit ? false : true)
    }

    const openImportanceModal = () => {
        setIsImportanceEdit(isImportanceEdit ? false : true)
    }

    const openStatusModal = () => {
        setIsEdit(isStatusEdit ? false : true)
    }

    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    task={task}
                    onUpdateTask={onUpdateTask}
                    group={group}
                />

                <div className="cells-row-container">
                    <div className="cells-row-component">
                        {board.columns && board.columns.map((column, idx) =>
                            <div className="cell-component-wrapper" key={idx}>
                                <div className="cell-component-inner">
                                    <div className={"cell-component"} >
                                        <TaskColumn
                                            setStatus={setStatus}
                                            column={column}
                                            task={task}
                                            setColumn={setColumn}
                                            isStatusEdit={isStatusEdit}
                                            isImportanceEdit={isImportanceEdit}
                                            importanceBgcColor={importanceBgcColor}
                                            statusBgcColor={statusBgcColor}
                                            setTxt={setTxt}
                                            isDateEdit={isDateEdit}
                                            setStartDate={setStartDate}
                                            startdate={startdate}
                                            openDateModal={openDateModal}
                                        />
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













