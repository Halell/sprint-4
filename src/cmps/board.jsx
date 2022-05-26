import { useEffect } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard } from '../store/action/board.actions'
import { taskService } from '../services/task.service'
import { groupService } from '../services/group.service'

export const Board = () => {
    let { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoard())
    }, [])

    useEffect(() => {
        console.log(board)
    }, [board])

    const onAddGroup = async () => {
        console.log('adding group!')
        const savedBoard = await groupService.saveGroup(board)
        board = savedBoard
        console.log(board)
    }

    const onAddTask = async (board, groupId, task, ev) => {
        ev.preventDefault()
        taskService.saveTask(board, groupId, task)
    }

    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader
                onAddGroup={onAddGroup}
            />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        {board && board.groups?.map((group, idx) =>
                            <BoardGroup
                                onAddTask={onAddTask}
                                group={group}
                                columns={board.columns}
                                key={idx}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}

