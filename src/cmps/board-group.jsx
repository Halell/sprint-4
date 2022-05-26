import { useState } from 'react'
import { TaskList } from "./task-list"

import { useSelector } from 'react-redux'


<<<<<<< HEAD
export function BoardGroup({ group, columns, onAddTask, onARemoveGroup }) {
    const dispatch = useDispatch()
=======
export function BoardGroup({ group, columns, onAddTask }) {

>>>>>>> 34d47cc4b4743316132340a079e691cfc19b34ff
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
    }
<<<<<<< HEAD
    // console.log('from board group', task)
    const toggleBtn = () => {
        // const isOpend = isOpen ? false : true
        setIsOpen(isOpen ? false : true)
    }
=======

>>>>>>> 34d47cc4b4743316132340a079e691cfc19b34ff
    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div onClick={() => toggleBtn()} className="btn-group-menu flex">🟢</div>
                    {isOpen &&
                        <div className='btns-modal'>
                            <button>Add group</button>
                            <button onClick={() => onARemoveGroup(group.id)}>x</button>
                            <button>Duplicate this group</button>
                            <button>Rename group</button>
                        </div>
                    }
                    <div className="title-inner-container">
                        <div>
                            <div className="group-title text-component" style={{ color: "#037f4c" }} >{group.title}</div>
                        </div>
                    </div>
                </div>
                <div className="column-wrapper-columns">
                    {columns.map((column, idx) =>

                        <div key={idx} >{column}</div>
                    )}
                </div>
                <div className="column-wrapper-add">+</div>
            </div>
            <TaskList group={group} onAddTask={onAddTask} />
            <form onSubmit={(ev) => onAddTask(board, group.id, task, ev)}  >
                <input type="text" onChange={onHandleChange} name="title" />
            </form>
        </div>
    )

}