import { useEffect, useState, useCallback } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard, updateBoard, setFilterBy } from '../store/action/board.actions'
import { taskService } from '../services/task.service'
import { groupService } from '../services/group.service'

export const Board = () => {
    let { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBoard())
    }, [])

    const onARemoveGroup = async (groupId) => {
        console.log('removing!')
        await groupService.remove(groupId, board)
        dispatch(loadBoard())
    }

    const onAddGroup = async (group) => {
        if (group) {
            console.log('updating group!')
            await groupService.addGroup(board, group)
            dispatch(loadBoard())
            return
        }
        console.log('adding group!')
        await groupService.addGroup(board)
        dispatch(loadBoard())
    }

    const onAddTask = async (board, groupId, task, ev) => {
        ev.preventDefault()
        dispatch(updateBoard(board, groupId, task))
    }

    const onUpdateTask = (task, groupId) => {
        dispatch(updateBoard(board, groupId, task))
    }

    const onRemoveTask = async (groupId, taskId) => {
        console.log('removing task!')
        await taskService.remove(groupId, taskId, board)
        dispatch(loadBoard())
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
    }

    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader
                onAddGroup={onAddGroup}
                onChangeFilter={onChangeFilter}
            />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        {board && board.groups?.map((group, idx) =>
                            <BoardGroup
                                onARemoveGroup={onARemoveGroup}
                                onAddTask={onAddTask}
                                onUpdateTask={onUpdateTask}
                                onRemoveTask={onRemoveTask}
                                group={group}
                                columns={board.columns}
                                key={idx}
                                onAddGroup={onAddGroup}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}

