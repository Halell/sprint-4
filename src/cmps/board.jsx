import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { BoardHeader } from './board-header'
import { BoardContent } from './board-group'
import { loadBoard, updateBoard, setFilterBy } from '../store/action/board.actions'
import { taskService } from '../services/task.service'
import { groupService } from '../services/group.service'
import { boardService } from '../services/board.service'

export const Board = ({ isPinned }) => {
    const params = useParams()
    let { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoard(params.id))
    }, [params.id])

    const onRemoveGroup = async (groupId) => {
        await boardService.setActivity(board, 'Removed group')
        await groupService.remove(groupId, board)
        dispatch(loadBoard())
    }
    const onAddGroup = async (group) => {
        if (group) {
            await groupService.addGroup(board, group)
            dispatch(loadBoard())
            return
        }
        await boardService.setActivity(board, 'Added board')
        await groupService.addGroup(board)
        dispatch(loadBoard())
    }
    const onAddTask = async (board, groupId, task) => {
        await boardService.setActivity(board, 'Added task')
        dispatch(updateBoard(board, groupId, task))
    }
    const onUpdateTask = async (task, groupId) => {
        dispatch(updateBoard(board, groupId, task))
    }
    const onRemoveTask = async (groupId, taskId) => {
        await boardService.setActivity(board, 'Removed task')
        await taskService.remove(groupId, taskId, board)
        dispatch(loadBoard())
    }
    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
    }
    const getPersons = () => {
        const persons = board.persons
    }
    const onSaveBoard = async (newBoard) => {
        await boardService.setActivity(board, 'Added board')
        await boardService.save(newBoard)
    }

    return (
        <section className={`board ${isPinned ? ' board-controller-pinned' : ''}`}>
            <div className="board-container">
                <div className="board-wrapper flex">
                    <BoardHeader
                        onAddGroup={onAddGroup}
                        onChangeFilter={onChangeFilter}
                        getPersons={getPersons}
                        board={board}
                        onSaveBoard={onSaveBoard}
                        onAddTask={onAddTask}
                    />
                    <div className="board-content">
                        <div className="board-content-container">
                            <div className="border-content-wrapper">
                                {board && board.groups?.map((group, idx) =>
                                    <BoardContent
                                        onRemoveGroup={onRemoveGroup}
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
                </div>
            </div>
        </section >
    )
}

