import { useEffect, useCallback } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard } from '../store/action/board.actions'
import { boardService } from '../services/board.service'
import { saveTask } from '../store/action/task.actions'

export const Board = () => {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBoard())
    }, [])
    const onAddTask = async (board, groupId, task, ev) => {
        ev.preventDefault()
        console.log('task11: ', task)
        console.log('board11: ', board)
        console.log('groupId11: ', groupId)
        dispatch(saveTask(board, groupId, task))
    }
    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        { board && board.groups?.map((group, idx) =>
                            <BoardGroup
                                onAddTask={ onAddTask }
                                group={ group }
                                columns={ board.columns }
                                key={ idx }
                            />
                        ) }
                    </div>
                </div>
            </div>
        </section >
    )
}

