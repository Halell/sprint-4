import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"
import { GroupFooter } from "./group-footer"
import { useSelector } from 'react-redux'
import { ProgressBar } from './progress-bar'

export function BoardContent({ group, onAddTask, onRemoveGroup, onUpdateTask, onRemoveTask, onAddGroup, onSaveBoard, provided }) {

    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    const [isChangeColor, setChangeColor] = useState(false)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(!isBtnsModalOpen)
        }
    }

    const onUseBtn = (val, group) => {
        console.log('val', val)
        if (val === 'remove') onRemoveGroup(group.id)
        if (val === 'add') onAddGroup()
        if (val === 'color') setChangeColor(!isChangeColor)
        if (val === 'duplicate') {
            const duplicateGroup = { ...group }
            duplicateGroup.id = null
            onAddGroup(duplicateGroup)
        }
        console.log(isChangeColor)
    }

    const onchangeColor = (val, group) => {
        group.style = val
        onAddGroup(group)
        setIsBtnsModalOpen(!isBtnsModalOpen)
        setChangeColor(!isChangeColor)
    }

    const onUpdateColumns = (el) => {
        const idx = el.target.getAttribute('idx')
        board.columns[idx] = el.target.innerText
        onAddGroup(group)
    }

    const onSaveGroup = (el) => {
        if (el) {
            const title = el.target.innerText.toLowerCase()
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
                onchangeColor={onchangeColor}
                isChangeColor={isChangeColor}
                />
            <TaskList
                onSaveBoard={onSaveBoard}
                onRemoveTask={onRemoveTask}
                group={group}
                onUpdateTask={onUpdateTask}
                board={board}
                onAddGroup={onAddGroup}
                provided={provided}
                />
                {provided.placeholder}
            <GroupFooter
                group={group}
                onAddTask={onAddTask}
                />
            <div className="progres-bar-position flex">
                <div className="empty-cell"></div>
                <div className="empty-cell-nums"></div>
                <div className="empty-cell-date"></div>
                <ProgressBar group={group} />
            </div>
        </Fragment >
    )

}