import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { boardService } from '../services/board.service'
import { BoardPreview } from './board-preview-contoller'
import { BoardTopController } from './board-top-controller'



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
    const addBoard = async () => {
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
            className={ `board-controller ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}` }
            onMouseEnter={ () => setIsExpend(!isExpend,) }
            onMouseLeave={ () => setIsExpend(!isExpend) }
        >
            <div className={ `controller-btn  ${isPinned ? 'pinned' : ''} ` }
                onClick={ onSetIsPinned }>
                { isPinned ? '<' : '>' }
            </div>
            <div className={ `controller-container ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}` }>
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
                        <BoardTopController addBoard={ addBoard } />
                    </div >
                    <div className="spacer"></div>
                </div >
                <div className="controller-bottom">
                    <div className="board-list-container">
                        {
                            boards && boards.map((board, idx) => {
                                return <div className="boards-list-wraper flex column" key={ idx }>
                                    <BoardPreview board={ board } idx={ idx } removeBoard={ removeBoard } />
                                </div>
                            })
                        }
                    </div >
                </div >
            </div >
        </main >
    )
}