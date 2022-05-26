import { useState } from 'react'
import { TaskList } from "./task-list"
import { useFormRegister } from "../hooks/useFormRegister"
import { useDispatch, useSelector } from 'react-redux'
import { saveTask } from '../store/action/task.actions'

export function BoardGroup({ group, columns }) {
    const dispatch = useDispatch()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const boardId = board._id
    const [task, setTask] = useState(null)

<<<<<<< HEAD
export const BoardGroup = ({ group }) => {
    

    return <div className="group-header-wrppaer">
        <div className='group-header-cmp flex' >
            <div className='column-wrapper-title flex'>
                <div className='btn-group-menu flex'>🟢
                    <div className='group-title' >{group.title}</div>
=======
    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
    }

    const onAddTask = (task, boardId, groupId) => {
        console.log('saving')
        dispatch(saveTask(task, boardId, groupId))
    }

    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div className="btn-group-menu flex">🟢
                        <div className="title-inner-container">
                            <div className="group-title text-component" style={{ color: "#037f4c" }} >{group.title}</div>
                        </div>
                    </div>
>>>>>>> ea8e494ca9644c5f44fab15a29d31c2b952cb0e1
                </div>
                <div className="column-wrapper-columns">
                    {columns.map((column, idx) =>

                        <div key={idx} >{column}</div>
                    )}
                </div>
                <div className="column-wrapper-add"></div>
            </div>
            <TaskList group={group} />
            <form onSubmit={(ev) => onAddTask(task, boardId, group.id, ev.preventDefault()
            )}  >
                <input type="text" onChange={onHandleChange} />
            </form>
        </div>
<<<<<<< HEAD
        <TaskList group={group} />
        <form onSubmit={onSaveTask}>

        <input type="text" placeholder="+ Add Item" />
        </form>
    </div>
=======
    )

>>>>>>> ea8e494ca9644c5f44fab15a29d31c2b952cb0e1
}