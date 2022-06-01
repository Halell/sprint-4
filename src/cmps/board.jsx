import { useEffect, useState, useCallback } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { BoardHeader } from './board-header'
import { BoardContent } from './board-group'
import { loadBoard, updateBoard, setFilterBy } from '../store/action/board.actions'
import { taskService } from '../services/task.service'
import { groupService } from '../services/group.service'
import { boardService } from '../services/board.service'
import { useDispatch, useSelector } from 'react-redux'

export const Board = ({ isPinned }) => {
    const params = useParams()
    const navigate = useNavigate()
    let { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    console.log('board: ', board);
    useEffect(() => {
        onLoadBoard()
    }, [params.id])
    const onLoadBoard = async () => {
        await dispatch(loadBoard(params.id))
    }
    const onRemoveGroup = async (groupId) => {
        await boardService.setActivity(board, 'Removed group')
        await groupService.remove(groupId, board)
        dispatch(loadBoard(params.id))
    }

    const onAddGroup = async (group) => {
        if (group) {
            await boardService.setActivity(board, 'Updated group')
            await groupService.saveGroup(board, group)
            dispatch(loadBoard(params.id))
            return
        }
        await boardService.setActivity(board, 'Added group')
        await groupService.saveGroup(board)
        dispatch(loadBoard(params.id))
    }

    const onAddTask = async (board, groupId, task) => {
        await boardService.setActivity(board, 'Added task')
        await taskService.saveTask(board, groupId, task)
        dispatch(loadBoard(params.id))
    }

    const onUpdateTask = async (task, groupId) => {
        await boardService.setActivity(board, 'Added task')
        await taskService.saveTask(board, groupId, task)
        dispatch(loadBoard(params.id))
    }

    const onRemoveTask = async (groupId, taskId) => {
        await boardService.setActivity(board, 'Removed task')
        await taskService.remove(groupId, taskId, board)
        dispatch(loadBoard(params.id))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy, params.id))
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
                    {/* srart sdrag here */}

                    <div className="board-content">
                        <div className="board-content-container">
                            <div className="border-content-wrapper">
                                {board && board.groups?.map((group, idx) =>
                                    < BoardContent
                                        onRemoveGroup={onRemoveGroup}
                                        onAddTask={onAddTask}
                                        onUpdateTask={onUpdateTask}
                                        onRemoveTask={onRemoveTask}
                                        group={group}
                                        columns={board.columns}
                                        key={idx}
                                        onAddGroup={onAddGroup}
                                        onSaveBoard={onSaveBoard}
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

