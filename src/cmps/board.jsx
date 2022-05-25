import { useEffect } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard } from '../store/action/board.actions'

export const Board = () => {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBoard())
    }, [])
    
    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            {board && board.groups?.map((group, idx) => <BoardGroup group={group} key={idx} />)}
        </section >
    )
}
