import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addBoard, removeBoard, updateBoard } from '../store/action/board.actions'
import { onLogin, onUpdateUser } from '../store/action/user.actions'
// import { BoardList } from './board-list'
// import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
// import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'
// import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'

export const Workspace = ({ onSetIsPinned, isPinned }) => {
    let { user } = useSelector((storeState) => storeState.userModule)
    const [isExpend, setIsExpend] = useState(false)
    const dispatch = useDispatch()
    const [newBoard, setNewBoard] = useState({ title: 'My-new-Board', members: [] })

    useEffect(() => {
        dispatch(onLogin())
    }, [])

    // const onRemoveGroup = async (groupId) => {
    //     await boardService.setActivity(board, 'Removed group')
    //     await groupService.remove(groupId, board)
    //     dispatch(loadBoard())
    // }
    // const onAddGroup = async (group) => {
    //     if (group) {
    //         await groupService.addGroup(board, group)
    //         dispatch(loadBoard())
    //         return
    //     }
    //     await boardService.setActivity(board, 'Added board')
    //     await groupService.addGroup(board)
    //     dispatch(loadBoard())
    // }
    // const onAddTask = async (board, groupId, task) => {
    //     await boardService.setActivity(board, 'Added task')
    //     dispatch(updateBoard(board, groupId, task))
    // }
    // const onUpdateTask = async (task, groupId) => {
    //     dispatch(updateBoard(board, groupId, task))
    // }
    // const onRemoveTask = async (groupId, taskId) => {
    //     await boardService.setActivity(board, 'Removed task')
    //     await taskService.remove(groupId, taskId, board)
    //     dispatch(loadBoard())
    // }
    // const onChangeFilter = (filterBy) => {
    //     dispatch(setFilterBy(filterBy))
    // }
    // const getPersons = () => {
    //     const persons = board.persons
    // }
    // const onSaveBoard = async (newBoard) => {
    //     await boardService.setActivity(board, 'Added board')
    //     await boardService.save(newBoard)
    // }
    if (!user) return <div>Loading...</div>
    return (
        <section className={ `board ${isPinned ? ' board-controller-pinned' : ''}` }>
            <div className="board-container">
                <div className="board-wrapper flex">
                    <div>{ user.fullname }</div>
                    {/* <BoardHeader
                        onAddGroup={ onAddGroup }
                        onChangeFilter={ onChangeFilter }
                        getPersons={ getPersons }
                        board={ board }
                        onSaveBoard={ onSaveBoard }
                        onAddTask={ onAddTask }
                    />
                    <div className="board-content">
                        <div className="board-content-container">
                            <div className="border-content-wrapper">
                                { board && board.groups?.map((group, idx) =>
                                    <BoardContent
                                        onRemoveGroup={ onRemoveGroup }
                                        onAddTask={ onAddTask }
                                        onUpdateTask={ onUpdateTask }
                                        onRemoveTask={ onRemoveTask }
                                        group={ group }
                                        columns={ board.columns }
                                        key={ idx }
                                        onAddGroup={ onAddGroup }
                                    />
                                ) }
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

