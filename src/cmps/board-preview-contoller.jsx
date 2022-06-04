import { NavLink } from "react-router-dom"
import { ReactComponent as Board } from '../assets/svg/board.svg'
import { FaTrash } from 'react-icons/fa'

export function BoardPreview({ board, idx, removeBoard }) {
    return <div>
        <div className="board-preview">

            <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to={`/board/${board._id}`}>
                <div key={idx} className="board-preview-card-wrapper">
                    <div className="board-preview-card">
                        <div className="board-icon"><Board /></div>
                        <div className="board-title-container">
                            <div className="board-title">{board.title}</div>
                            <div className="board-dropdown-menu"
                                onClick={(ev) => removeBoard(board._id, ev.preventDefault())}>
                                <div className="btn-board-remove"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>
}