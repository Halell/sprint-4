import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'
import { boardService } from '../services/board.service'
import { utilService } from '../services/util.service.js'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask }) => {
    const [statusBgcColor, setStatusBgcColor] = useState('')
    const [importanceBgcColor, setImportanceBgcColor] = useState('')
    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setStatus(task.importance, 'importance', 'loading') //ask rona
        setStatus(task.status, 'status', 'loading') //ask rona
    }, [])

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }

    const handleSelect = async (date) => {
        await boardService.setActivity(board, 'Set date ', task.date, date.toLocaleDateString())
        task.date = date.toLocaleDateString()
        onUpdateTask(task, group)
    }

    const addUser = async (fullname) => {
        const user = {
            id: utilService.makeId(),
            fullname,
            imgUrl: ''
        }
        task.persons.push(user)
        board.persons.push(user)
        onUpdateTask(task, group.id)
        await boardService.setActivity(board, 'Invited member')
    }

    const removeMember = async (member) => {
        const idx = task.persons.findIndex(person => person.id === member.id)
        task.persons.splice(idx, 1)
        onUpdateTask(task, group.id)
        await boardService.setActivity(board, 'Removed member')
    }

    const onSetIsModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const setMember = async (member) => {
        task.persons.push(member)
        onUpdateTask(task, group.id)
        await boardService.setActivity(board, 'Added member')
    }

    const setTxt = async (el) => {
        task.text = el.target.innerText
        onUpdateTask(task, group.id)
        await boardService.setActivity(board, 'Update task txt')
    }
    const setStatus = async (val, field, loading) => {
        var color = 'rgb(173, 150, 122)'
        const prevStatus = task[field]

        if (val === 'done' || val === 'high') color = 'rgb(0, 200, 117)'
        if (val === 'in-progress' || val === 'mid') color = 'rgb(253, 171, 61)'
        if (val === 'stuck' || val === 'low') color = 'rgb(226, 68, 92)'

        task[field] = val
        field === 'status' ? setStatusBgcColor(color) : setImportanceBgcColor(color)
        task.style = { backgroundColor: color }

        if (loading) return
        onUpdateTask(task, group.id)
        await boardService.setActivity(board, `Changed ${field}`, prevStatus, task[field])
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
<<<<<<< HEAD
                                            setStatus={ setStatus }
                                            boardColumn={ boardColumn }
                                            task={ task }
                                            importanceBgcColor={ importanceBgcColor }
                                            statusBgcColor={ statusBgcColor }
                                            setTxt={ setTxt }
                                            board={ board }
                                            setMember={ setMember }
=======
                                            setStatus={setStatus}
                                            boardColumn={boardColumn}
                                            task={task}
                                            importanceBgcColor={importanceBgcColor}
                                            statusBgcColor={statusBgcColor}
                                            setTxt={setTxt}
                                            board={board}
                                            setMember={setMember}
                                            removeMember={removeMember}
                                            addUser={addUser}
                                            handleSelect={handleSelect}
>>>>>>> bc5a30169d197b6d18fac0f1fdaa267d26ee00f8
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













