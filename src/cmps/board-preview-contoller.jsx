import { NavLink } from "react-router-dom"
import { ReactComponent as Board } from '../assets/svg/board.svg'
export function BoardPreview({ board, idx, removeBoard }) {
    return <div>
        <div className="board-preview">

            <div key={ idx } className="board-preview-card-wrapper">
                <div className="board-preview-card">
                    <div className="board-icon"><Board /></div>
                    <div className="board-title-container">
                        <NavLink
                            className={ (navData) => (navData.isActive ? 'active' : '') }
                            to={ `/board/${board._id}` }>
                            <div className="board-title">{ board.title }</div>
                        </NavLink>
                        <div className="board-dropdown-menu">
                            <div onClick={ () => removeBoard(board._id, console.log('fff')) } className="btn-board-remove"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>
}