import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'
import { boardService } from '../services/board.service'
import { utilService } from '../services/util.service.js'
import { taskService } from '../services/task.service.js'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask, onAddTask, onAddGroup, onSaveBoard }) => {
    const [statusBgcColor, setStatusBgcColor] = useState('')
    const [importanceBgcColor, setImportanceBgcColor] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setStatus(task.importance, 'importance', 'loading')
        setStatus(task.status, 'status', 'loading')
    }, [])

    const calcProgress = () => {
        let progress = {
            done: 0,
            inProgress: 0,
            stuck: 0,
            none: 0
        }
        group.tasks.map(task => {
            if (task.status === 'done') progress.done += 1
            if (task.status === 'in-progress') progress.inProgress += 1
            if (task.status === 'stuck') progress.stuck += 1
            if (task.status === 'none') progress.none += 1
        })
        group.progress = progress
        onAddGroup(group)
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
        console.log('ya')
        const newTask = await taskService.setActivity(task, 'Invited member')
        onUpdateTask(newTask, group.id)
        await boardService.setActivity(board, 'Invited member')
    }

    const removeMember = async (member) => {
        const idx = task.persons.findIndex(person => person.id === member.id)
        task.persons.splice(idx, 1)
        const newTask = await taskService.setActivity(task, 'Removed member')
        onUpdateTask(newTask, group.id)
        await boardService.setActivity(board, 'Removed member')
    }

    const onSetIsModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const setMember = async (ev, member) => {
        ev.stopPropagation()
        task.persons.push(member)
        task = await taskService.setActivity(task, 'Added member')
        await boardService.setActivity(board, 'Added member')
        onUpdateTask(task, group.id)
    }

    const setTxt = async (el) => {
        task.text = el.target.innerText
        onUpdateTask(task, group.id)
        task = await taskService.setActivity(task, 'Edited text')
        await boardService.setActivity(board, 'Update task text')
    }
    const setStatus = async (val, field, loading) => {
        var color = 'rgb(173, 150, 122)'
        const prevStatus = task[field]
        var style = {
            from: statusBgcColor,
            to: ''
        }
        if (val === 'done' || val === 'high') color = 'rgb(0, 200, 117)'
        if (val === 'in-progress' || val === 'mid') color = 'rgb(253, 171, 61)'
        if (val === 'stuck' || val === 'low') color = 'rgb(226, 68, 92)'

        task[field] = val
        field === 'status' ? setStatusBgcColor(color) : setImportanceBgcColor(color)
        task.style = { backgroundColor: color }
        style.to = color
        if (loading) return
        calcProgress()
        task = await taskService.setActivity(task, `Changed ${field}`, prevStatus, task[field], style)
        onUpdateTask(task, group.id)
        onSaveBoard(board)
        await boardService.setActivity(board, `Changed ${field}`, prevStatus, task[field], style)
    }

    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    onSetIsModalOpen={onSetIsModalOpen}
                    task={task}
                    onUpdateTask={onUpdateTask}
                    group={group}
                />
                <div className="cells-row-container">
                    {board.columns && board.columns.map((boardColumn, idx) =>
                        <div className="cell-component-wrapper" key={idx}>
                            <div className={`cell-component ${boardColumn}`} >
                                <TaskColumn
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
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="column-wrapper-add"></div>
            </div>
            {isModalOpen &&
                <div className='task-modal-menu'>
                    <div color='task-btns-modal-open'>
                        <div className='task-btn-crud'><HiOutlineDocumentDuplicate />Duplicate</div>
                        <div onClick={() => onRemoveTask(group.id, task.id)} className='task-btn-crud'><AiOutlineDelete />Delete</div>
                    </div>
                </div>
            }
        </div>

    )
}














