import { useEffect, useCallback } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard } from '../store/action/board.actions'
<<<<<<< HEAD
import { boardService } from '../services/board.service'
import { saveTask } from '../store/action/task.actions'
=======
>>>>>>> 9508a7fbce2213b32af0f195a196d40c242aeecd

export const Board = () => {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBoard())
    }, [])

<<<<<<< HEAD
    const onAddTask = async (board, groupId, task, ev) => {
        ev.preventDefault()
        console.log('task11: ', task);
        console.log('board11: ', board);
        console.log('groupId11: ', groupId);
        dispatch(saveTask(board, groupId, task))
    }
=======
    const onSetTask = useCallback(async (task) => {
        console.log(task)
        // dispatch(setFilterBy(filterBy))
        // dispatch(loadRobots())
    }, [])

>>>>>>> 9508a7fbce2213b32af0f195a196d40c242aeecd

    return (
        <section className='board board-controller-pinned flex'>
            <BoardHeader />
            <div className="board-group">
                <div className="board-group-wrapper">
                    <div className="border-group-content">
                        { board && board.groups?.map((group, idx) =>
                            <BoardGroup
<<<<<<< HEAD
                                onAddTask={onAddTask}
                                group={group}
                                columns={board.columns}
                                key={idx}
=======
                                onSetTask={ onSetTask }
                                group={ group }
                                columns={ board.columns }
                                key={ idx }
>>>>>>> 9508a7fbce2213b32af0f195a196d40c242aeecd

                            />
                        ) }
                    </div>
                </div>
            </div>
        </section >
    )
}

