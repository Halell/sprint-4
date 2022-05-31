import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"
import { GroupFooter } from "./group-footer"

import { useSelector } from 'react-redux'

export function BoardContent({ group, onAddTask, onRemoveGroup, onUpdateTask, onRemoveTask, onAddGroup, onSaveBoard }) {

    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }

    const onUseBtn = (val, group) => {
        if (val === 'remove') onRemoveGroup(group.id)
        if (val === 'add') onAddGroup()
        if (val === 'color') onchangeColor(group)
        if (val === 'duplicate') {
            const duplicateGroup = { ...group }
            duplicateGroup.id = null
            onAddGroup(duplicateGroup)
        }
        setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
    }

    const onchangeColor = (group) => {
        group.style = { backgroundColor: 'rgb(0, 200, 117)' }
        onAddGroup(group)
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
                onSaveGroup={onSaveGroup}
                onRemoveGroup={onRemoveGroup}
                group={group}
                board={board}
                onUpdateColumns={onUpdateColumns}
                onUseBtn={onUseBtn}
                toggle={toggle}
                isBtnsModalOpen={isBtnsModalOpen}
            />
            <TaskList
                onSaveBoard={onSaveBoard}
                onRemoveTask={onRemoveTask}
                group={group}
                onAddTask={onAddTask}
                onUpdateTask={onUpdateTask}
                board={board}
                onAddGroup={onAddGroup}
            />
            <GroupFooter
                group={group}
                onAddTask={onAddTask}
            />
        </Fragment >
    )

}