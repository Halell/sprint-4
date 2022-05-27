import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"

import { useSelector } from 'react-redux'


export function BoardContent({ group, columns, onAddTask, onRemoveGroup }) {
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
        <Fragment>
            <GroupHeader
                onSaveGroup={ onSaveGroup }
                onRemoveGroup={ onRemoveGroup }
                group={ group }
                board={ board }
            />
            <TaskList
                group={ group }
                onAddTask={ onAddTask }
                columns={ columns }
            />
            <div className="group-footer">
                <form onSubmit={ (ev) => onAddTask(board, group.id, task, ev) }  >
                    <input type="text" onChange={ onHandleChange } name="title" />
                </form>
            </div>
        </Fragment>
    )

}