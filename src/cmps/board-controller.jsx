import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { boardService } from '../services/board.service'
import DatePicker from "react-datepicker"

import { addBoard, removeBoard, loadBoard } from '../store/action/board.actions'
import { onLogin, onUpdateUser } from '../store/action/user.actions'
import { BoardList } from './board-list'
import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'
import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'
import { ReactComponent as Board } from '../assets/svg/board.svg'

export const BoardController = ({ onSetIsPinned, isPinned }) => {
    const params = useParams()
    const naviget = useNavigate()
    const [isExpend, setIsExpend] = useState(false)
    const [boards, setBoards] = useState(null)

    useEffect(() => {
        loadBoards()
    }, [])

    const loadBoards = async () => {
        const boards = await boardService.query()
        setBoards(boards)
    }
    console.log('boards: ', boards);
    const addBoard = async () => {
        // await boardService.setActivity(board, 'Added board')
        await boardService.save({})
        loadBoards()
    }

    const removeBoard = async (boardId) => {
        await boardService.remove(boardId)
        loadBoards()
        if (boardId === params.id) {
            naviget("/")
        }
    }
    return (
        <main
            className={`board-controller ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}`}
            onMouseEnter={() => setIsExpend(!isExpend,)}
            onMouseLeave={() => setIsExpend(!isExpend)}
        >
            <div className={`controller-btn  ${isPinned ? 'pinned' : ''} `}
                // onMouseOver={ () => setIsExpend(isExpend) }
                onClick={onSetIsPinned}>
                {isPinned ? '<' : '>'}
            </div>

            <div className={`controller-container ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}`}>
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
                        <div onClick={() => addBoard()} className="btn-add"><Plus /><span>Add</span></div>
                        <div className="board-search-box">
                            <Magnifier />
                            <input type="text" placeholder="Search" />

                            <div className="lightning-img-container">
                                <div className="lightning-img-wrapper">
                                    <Lightning />
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="spacer"></div>
                </div >
                <div className="controller-bottom">
                    <div className="board-list-container">
                        {
                            boards && boards.map((board, idx) => {
                                return <div className="boards-list-wraper flex column">
                                    <div className="board-preview">
                                        <NavLink style={{ backgroundColor: 'rgb(0, 200, 117)' }}
                                            className={(navData) => (navData.isActive ? 'active' : '')}
                                            to={`/board/${board._id}`}>
                                            <div key={idx} className="board-preview-card-wrapper">
                                                <div className="board-preview-card">
                                                    <div className="board-icon"><Board /></div>
                                                    <div className="board-title-container">
                                                        <div className="board-title">{board.title}</div>
                                                        <div className="board-dropdown-menu"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div onClick={() => removeBoard(board._id)} className="btn-board-remove">
                                        remove
                                    </div>
                                </div>

                            })
                        }
                    </div >
                </div >
            </div >
        </main >
    )
}