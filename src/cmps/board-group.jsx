import { useState } from 'react'
import { TaskList } from "./task-list"

import { useSelector } from 'react-redux'


export function BoardGroup({ group, columns, onAddTask, onARemoveGroup, onUpdateTask, onRemoveTask, onAddGroup }) {

    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)
    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)


    const onHandleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setTask((prevFields) => ({ ...prevFields, [field]: value }))
    }
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }

    const onUseBtn = (val) => {
        if (val === 'remove') onARemoveGroup(group.id)
        // if(var==='')
        setIsBtnsModalOpen(false)
    }

    const onUpdateColumns = (el) => {
        const idx = el.target.getAttribute('idx')
        board.columns[idx] = el.target.innerText
        onAddGroup(group) //suposed to be updateBoard()
    }

    const onSaveGroup = (el) => {
        if (el) {
            const title = el.target.innerText
            group.title = title
        }
        onAddGroup(group)
    }
    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div onClick={() => toggle('btns-modal')} className="btn-group-menu flex">🟢</div>
                    {isBtnsModalOpen &&
                        <div className='btns-modal'>
                            <button onClick={() => onUseBtn('add')}>Add group</button>
                            <button onClick={() => onUseBtn('remove')}>x</button>
                            <button onClick={() => onUseBtn('duplicate')}>Duplicate this group</button>
                            <button onClick={() => onUseBtn('rename')}>Rename group</button>
                        </div>
                    }

                    <div className="title-inner-container">
                        <div>
                            <div
                                suppressContentEditableWarning={true}
                                contentEditable={true}
                                onBlur={onSaveGroup}
                                className="group-title text-component"
                                style={{ color: "#037f4c" }} >
                                {group.title && group.title}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column-wrapper-columns">
                    {columns.map((column, idx) =>
                        <div
                            suppressContentEditableWarning={true}
                            onBlur={onUpdateColumns}
                            contentEditable={true}
                            title={column}
                            key={idx}
                            idx={idx}>
                            {column}
                        </div>
                    )}
                </div>
                <div className="column-wrapper-add">+</div>

            </div>
            <TaskList onRemoveTask={onRemoveTask} group={group} onAddTask={onAddTask} onUpdateTask={onUpdateTask} />
            <form onSubmit={(ev) => onAddTask(board, group.id, task, ev)}  >
                <input type="text" onChange={onHandleChange} name="title" />
            </form>
        </div >
    )

}