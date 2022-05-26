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
                        { board && board.groups?.map((group, idx) =>
                            <BoardGroup
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

