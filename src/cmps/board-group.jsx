import { useState } from 'react'
import { TaskList } from "./task-list"

import { useSelector } from 'react-redux'


export function BoardGroup({ group, columns, onAddTask, onARemoveGroup }) {
    // const dispatch = useDispatch()

    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)
    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    // const [isTitleInputOpen, setIsTitleInputOpen] = useState(false)
    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
    }
    // console.log('from board group', task)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }

    const onSaveGroup = (elTitle) => {
        console.log('elTitle', elTitle.target.innerText)
        
    }

    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div onClick={() => toggle('btns-modal')} className="btn-group-menu flex">🟢</div>
                    {isBtnsModalOpen &&
                        <div className='btns-modal'>
                            <button>Add group</button>
                            <button onClick={() => onARemoveGroup(group.id)}>x</button>
                            <button>Duplicate this group</button>
                            <button>Rename group</button>
                        </div>
                    }
                    <div className="title-inner-container">
                        <div>
                            <div contentEditable={true} onBlur={onSaveGroup} className="group-title text-component" style={{ color: "#037f4c" }} >{group.title}</div>
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
        </div >
    )

}