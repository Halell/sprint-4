import { useEffect, useCallback } from 'react'
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

    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
<<<<<<< HEAD
    {
        board && board.groups?.map((group, idx) =>
=======
<<<<<<< HEAD
                        {board && board.groups?.map((group, idx) => <BoardGroup group={group} key={idx} />)}
=======
                        {board && board.groups?.map((group, idx) =>
>>>>>>> 0e037df20b707471324a20486cbf6f1947e2bc4d
            <BoardGroup
                group={ group }
                columns={ board.columns }
                key={ idx }

            />
<<<<<<< HEAD
        )
    }
=======
                        )}
>>>>>>> ea8e494ca9644c5f44fab15a29d31c2b952cb0e1
>>>>>>> 0e037df20b707471324a20486cbf6f1947e2bc4d
                    </div >
                </div >
            </div >
        </section >
    )
}

