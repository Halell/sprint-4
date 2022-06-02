import { NavLink } from "react-router-dom";
import { ReactComponent as Board } from '../assets/svg/board.svg'
export function BoardPreview({ board, idx, removeBoard }) {
    return <div>
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
}