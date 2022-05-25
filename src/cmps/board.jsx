import { useEffect } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard } from '../store/action/board.actions'
import { boardService } from '../services/board.service'

export const Board = () => {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBoard())
    }, [])

    const onAddTask = (task) => {
        console.log('saving')
        boardService.save(task)
    }

    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        {board && board.groups?.map((group, idx) => <BoardGroup group={group} key={idx} onAddTask={onAddTask} />)}
                    </div>
                </div>
            </div>
        </section >
    )
}

