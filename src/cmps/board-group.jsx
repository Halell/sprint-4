import { useState } from 'react'
import { TaskList } from "./task-list"
import { useFormRegister } from "../hooks/useFormRegister"
import { useDispatch, useSelector } from 'react-redux'
import { saveTask } from '../store/action/task.actions'

export function BoardGroup({ group, columns, onAddTask }) {
    const dispatch = useDispatch()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const boardId = board._id
    const [task, setTask] = useState(null)

    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
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
                </div>
                <div className="column-wrapper-columns">
                    {columns.map((column, idx) =>

                        <div key={idx} >{column}</div>
                    )}
                </div>
                <div className="column-wrapper-add"></div>
            </div>
            <TaskList group={group} />
            <form onSubmit={(ev) => onAddTask(board, group.id, task, ev)}  >
                <input type="text" onChange={onHandleChange} name="title" />
            </form>
        </div>
    )

}