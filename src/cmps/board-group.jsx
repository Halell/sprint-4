import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"

import { useSelector } from 'react-redux'

export function BoardContent({ group, columns, onAddTask, onRemoveGroup, onUpdateTask, onRemoveTask, onAddGroup }) {

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
        if (val === 'remove') onRemoveGroup(group.id)
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
        <Fragment>
            <GroupHeader
                onSaveGroup={ onSaveGroup }
                onRemoveGroup={ onRemoveGroup }
                group={ group }
                board={ board }
                onUpdateColumns={ onUpdateColumns }
                onUseBtn={ onUseBtn }
            />
            <TaskList
                onRemoveTask={ onRemoveTask }
                group={ group }
                onAddTask={ onAddTask }
                onUpdateTask={ onUpdateTask }
                board={ board }
            />

            <div className="group-footer">
                <form onSubmit={ (ev) => onAddTask(board, group.id, task, ev) }  >
                    <input type="text" onChange={ onHandleChange } name="title" />
                </form>
            </div>
        </Fragment>
    )

}