import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { TitleCell } from './title-cell.jsx'
import { TaskColumn } from './task-column'
import { boardService } from '../services/board.service'
import { utilService } from '../services/util.service.js'
import { taskService } from '../services/task.service.js'
import { ReactComponent as Updates } from '../assets/svg/updates.svg'

export const TaskPreview = ({ board, task, onUpdateTask, group, onRemoveTask, onAddTask, onAddGroup, onSaveBoard, idx }) => {
    const [statusBgcColor, setStatusBgcColor] = useState('')
    const [priorityBgcColor, setImportanceBgcColor] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setStatus(task.priority, 'priority', 'loading')
        setStatus(task.status, 'status', 'loading')
        // calcProgress()
    }, [])

    // const calcProgress = () => {
    //     console.log('progress ');
    //     // let progress = {
    //     //     done: '',
    //     //     inProgress: '',
    //     //     stuck: '',
    //     //     none: ''
    //     // }
    //     const progress = group.tasks.reduce((acc, task) => {
    //         if (acc[task.status]) acc[task.status] += 1
    //         else acc[task.status] = 1
    //         return acc
    //     }, {})
    //     console.log('progress: ', progress);
    //     group.progress = progress
    //     onAddGroup(group)
    // }

    // function getProgress(group) {
    //     let colIdxs = []
    //     group.tasks[0].columns.forEach((col, idx) => {
    //         if (col.type === 'status') colIdxs.push(idx)
    //     })
    //     group.progress = []
    //     colIdxs.forEach(colIdx => {
    //         const value = group.tasks.reduce((acc, task) => {
    //             if (acc[task.columns[colIdx].value.title]) acc[task.columns[colIdx].value.title] += 1
    //             else acc[task.columns[colIdx].value.title] = 1
    //             return acc
    //         }, {})
    //         group.progress.push({ colIdx, value })
    //     })
    //     return group.progress
    // }

    const handleSelect = (date) => {
        const updateBoard = boardService.setActivity(board, 'Set date ', task.date, date.toLocaleDateString())
        let month = date.toLocaleDateString('he-IL', { month: '2-digit' })
        const day = date.toLocaleDateString('he-IL', { day: '2-digit' })
        switch (month) {
            case '01': month = 'Jan'
                break
            case '02': month = 'Feb'
                break
            case '03': month = 'Mar'
                break
            case '04': month = 'Apr'
                break
            case '05': month = 'May'
                break
            case '06': month = 'Jun'
                break
            case '07': month = 'Jul'
                break
            case '08': month = 'Aug'
                break
            case '09': month = 'Sep'
                break
            case '10': month = 'Oct'
                break
            case '11': month = 'Nov'
                break
            case '12': month = 'Dec'
                break
            default:
                console.log('def')
        }
        const newDate = month + ' ' + day
        task.date = newDate
        console.log(task.date)
        onUpdateTask(task, group.id, updateBoard)
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
        const newTask = taskService.setActivity(task, 'Invited member')
        const updateBoard = boardService.setActivity(board, 'Invited member')
        onUpdateTask(newTask, group.id, updateBoard)
    }

    const removeMember = (member) => {
        const idx = task.persons.findIndex(person => person.id === member.id)
        task.persons.splice(idx, 1)
        const newTask = taskService.setActivity(task, 'Removed member')
        const updateBoard = boardService.setActivity(board, 'Removed member')
        onUpdateTask(newTask, group.id, updateBoard)
    }

    const onSetIsModalOpen = () => {
        setIsModalOpen(!isModalOpen)
    }

    const setMember = (ev, member) => {
        ev.stopPropagation()
        task.persons.push(member)
        task = taskService.setActivity(task, 'Added member')
        const updateBoard = boardService.setActivity(board, 'Added member')
        onUpdateTask(task, group.id, updateBoard)
    }

    const setTxt = (el) => {
        task.text = el.target.innerText
        task = taskService.setActivity(task, 'Edited text')
        const updateBoard = boardService.setActivity(board, 'Update task text')
        onUpdateTask(task, group.id, updateBoard)
    }
    const setStatus = async (val, field, loading) => {
        var color = 'rgb(196, 196, 196)'
        const prevStatus = task[field]
        var style = {
            from: statusBgcColor,
            to: ''
        }
        if (val === 'done' || val === 'high') color = 'rgb(0, 200, 117)'
        if (val === 'working on it' || val === 'mid') color = 'rgb(253, 171, 61)'
        if (val === 'stuck' || val === 'low') color = 'rgb(226, 68, 92)'

        task[field] = val
        field === 'status' ? setStatusBgcColor(color) : setImportanceBgcColor(color)
        task.style = { backgroundColor: color }
        style.to = color
        if (loading) return
        // calcProgress()
        const newTask = taskService.setActivity(task, `Changed ${field}`, prevStatus, task[field], style)
        const updateBoard = boardService.setActivity(board, `Changed ${field}`, prevStatus, task[field], style)
        onUpdateTask(newTask, group.id, updateBoard)
        // onSaveBoard(board)
    }

    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    onSetIsModalOpen={onSetIsModalOpen}
                    task={task}
                    onUpdateTask={onUpdateTask}
                    group={group}
                    board={board}
                />
                <div className="cells-row-container">
                    {board.columns && board.columns.map((boardColumn, idx) =>
                        <div className="cell-component-wrapper" key={idx}>
                            <div className={`cell-component ${boardColumn}`} >
                                <TaskColumn
                                    setStatus={setStatus}
                                    boardColumn={boardColumn}
                                    task={task}
                                    priorityBgcColor={priorityBgcColor}
                                    statusBgcColor={statusBgcColor}
                                    setTxt={setTxt}
                                    board={board}
                                    setMember={setMember}
                                    removeMember={removeMember}
                                    addUser={addUser}
                                    handleSelect={handleSelect}
                                    group={group}
                                    idx={idx}
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
                        <div className='task-btn-crud'><HiOutlineDocumentDuplicate /> <span>Duplicate</span> </div>
                        <div onClick={() => onRemoveTask(group.id, task.id, task)} className='task-btn-crud'><AiOutlineDelete /> <span>Delete</span> </div>
                    </div>
                </div>
            }
        </div>

    )
}














