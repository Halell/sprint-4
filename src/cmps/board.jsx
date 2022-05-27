import { useEffect, useState } from 'react'
import { BoardHeader } from './board-header'
import { BoardContent } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard, updateBoard } from '../store/action/board.actions'
import { taskService } from '../services/task.service'
import { groupService } from '../services/group.service'

export const Board = () => {
    let { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoard())
    }, [])

    const onRemoveGroup = async (groupId) => {
        console.log('removing!')
        await groupService.remove(groupId, board)
        dispatch(loadBoard())
    }

    const onAddGroup = async (group) => {
        console.log('adding group!')
        await groupService.addGroup(board)
        dispatch(loadBoard())
    }

    const onAddTask = async (board, groupId, task, ev) => {
        ev.preventDefault()
        dispatch(updateBoard(board, groupId, task))
    }

    return (
        <section className='board board-controller-pinned'>
            <div className="board-container">
                <div className="board-wrapper flex">
                    <BoardHeader
                        onAddGroup={ onAddGroup }
                    />
                    <div className="board-content">
                        <div className="board-content-container">
                            <div className="border-content-wrapper">
                                { board && board.groups?.map((group, idx) =>
                                    <BoardContent
                                        onRemoveGroup={ onRemoveGroup }
                                        onAddTask={ onAddTask }
                                        group={ group }
                                        columns={ board.columns }
                                        key={ idx }
                                    />
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

