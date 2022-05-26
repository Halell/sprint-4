import { useEffect, useCallback } from 'react'
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

    const onSetTask = useCallback(async (task) => {
        console.log(task)
        // dispatch(setFilterBy(filterBy))
        // dispatch(loadRobots())
    }, [])


    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        { board && board.groups?.map((group, idx) =>
                            <BoardGroup
                                onSetTask={ onSetTask }
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

