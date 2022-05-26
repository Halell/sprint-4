import { useEffect, useState } from 'react'
import { TaskList } from "./task-list"
import { useDispatch, useSelector } from 'react-redux'
import { saveTask } from '../store/action/task.actions'

export function BoardGroup({ group, columns, onAddTask }) {
    const dispatch = useDispatch()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)

    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
        console.log('task22: ', task);
    }
    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div className="btn-group-menu flex">🟢</div>
                    <div className="title-inner-container">
                        <div>
                            <div className="group-title text-component" style={{ color: "#037f4c" }} >{group.title}</div>
                        </div>
                    </div>

                </div>
                <div className="column-wrapper-columns">
                    {columns && columns.map((column, idx) =>

                        <div key={idx} >{column}</div>
                    )}
                </div>
                <div className="column-wrapper-add">+</div>
            </div>
<<<<<<< HEAD
            <TaskList group={group} />
            <form onSubmit={(ev) => onAddTask(task, boardId, group.id, ev.preventDefault()
            )}  >
                <input type="text" onChange={onHandleChange} />
=======
<<<<<<< HEAD
            <TaskList group={group} />
            <form onSubmit={(ev) => onAddTask(board, group.id, task, ev)}  >
                <input type="text" onChange={onHandleChange} name="title" />
=======
            <TaskList group={ group } />
            <form onSubmit={ (ev) => onAddTask(task, boardId, group.id, ev.preventDefault()) }  >

                <input type="text" onChange={ onHandleChange } />
>>>>>>> 9508a7fbce2213b32af0f195a196d40c242aeecd
>>>>>>> 074a42602e006d89f3c581797e0f195638d60960
            </form>
        </div>
    )
}