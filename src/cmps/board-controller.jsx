import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import DatePicker from "react-datepicker"

import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'
import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'
import { ReactComponent as Board } from '../assets/svg/board.svg'
export const BoardController = ({ onSetIsPinned, isPinned }) => {

    const [isExpend, setIsExpend] = useState(false)

    return (
        <main
            className={ `board-controller ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}` }
            onMouseEnter={ () => setIsExpend(!isExpend,) }
            onMouseLeave={ () => setIsExpend(!isExpend) }
        >
            <div className={ `controller-btn  ${isPinned ? 'pinned' : ''} ` }
                // onMouseOver={ () => setIsExpend(isExpend) }
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
                        <div className="btn-add"><Plus /><span>Add</span></div>
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

                        <NavLink style={ { backgroundColor: 'rgb(0, 200, 117)' } }
                            className={ (navData) => (navData.isActive ? 'active' : '') }
                            to="/board/b102">
                            <div className="board-preview-card-wrapper">
                                <div className="board-preview-card">
                                    <div className="board-icon"><Board /></div>
                                    <div className="board-title-container">
                                        <div className="board-title">ssss</div>
                                        <div className="board-dropdown-menu"></div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </main >
    )
}