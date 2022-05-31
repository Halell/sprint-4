import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addBoard, removeBoard, updateBoard } from '../store/action/board.actions'
import { onLogin, onUpdateUser } from '../store/action/user.actions'
import { BoardList } from './board-list'
import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'
import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'

export const BoardController = ({ onSetIsPinned, isPinned }) => {
    let { user } = useSelector((storeState) => storeState.userModule)
    const [isExpend, setIsExpend] = useState(false)
    const dispatch = useDispatch()
    const [newBoard, setNewBoard] = useState({ title: 'My-new-Board', members: [] })

    useEffect(() => {
        dispatch(onLogin())
    }, [])
    const onAddBoard = async () => {
        // console.log('kkkl')
        const updateBoard = await dispatch(addBoard(newBoard))
        console.log(updateBoard)
        user.boards.push({ _id: updateBoard._id, title: updateBoard.title })
        dispatch(onUpdateUser(user))
        console.log(user)
    }
    const onRemoveBoard = (boardId) => {
        dispatch(removeBoard(boardId))
    }

    if (!user) return <div>Loading...</div>
    return (
        <main className={ `board-controller ${isPinned ? 'pinned' : ''}` }>
            <div className={ `controller-btn  ${isPinned ? 'pinned' : ''} ` }
                onClick={ onSetIsPinned }>
                { isPinned ? '<' : '>' }
            </div>
            <div className="controller-container">
                <div className="controller-top">
                    <div className="controller-top-top">
                        <div className="dropdown-navigation-header-container">
                            <span className="title">Workspace</span>
                            <div className="dropdown-navigation">⋯</div>
                        </div>
                        <div className="work-space-dropdown">
                            <div className="name-container">
                                <div className="work-space-avatar">M</div>
                                <span >Main workspace</span>
                            </div>
                            <div className="open-drop-down" >&lt;</div>
                        </div>
                    </div>
                    <div className="controller-top-bottom">
                        <div className="btn-add" onClick={ onAddBoard }><Plus /><span>Add</span></div>
                        <div className="board-search-box">
                            <Magnifier />
                            <input type="text" placeholder="Search" />

                            <div className="lightning-img-container">
                                <div className="lightning-img-wrapper">
                                    <Lightning />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                </div>
                <div className="controller-bottom">
                    <div className="board-list-container">
                        <BoardList
                            boards={ user.boards }
                            onRemoveBoard={ onRemoveBoard }
                        />
                    </div>
                </div>
            </div>
        </main >
    )
}