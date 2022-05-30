import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"
import { GroupFooter } from "./group-footer"

import { useSelector } from 'react-redux'

export function BoardContent({ group, onAddTask, onRemoveGroup, onUpdateTask, onRemoveTask, onAddGroup }) {

    const { board } = useSelector((storeState) => storeState.boardModule)
    // const [task, setTask] = useState(null)
    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)


    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }

    const onUseBtn = (val) => {
        if (val === 'remove') onRemoveGroup(group.id)
        if (val === 'add') onAddGroup()
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
            <GroupFooter
                group={ group }
                onAddTask={ onAddTask }
            />
        </Fragment >
    )

}