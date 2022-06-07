import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"

import { useOutsideClick } from '../hooks/useClickOutsideParent'

import { ReactComponent as Board } from '../assets/svg/board.svg'

export function BoardPreview({ board, idx, removeBoard }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const wrapperRef = useRef(null)
    const parentRef = useRef(null)
    useOutsideClick(wrapperRef, setIsAddModalOpen, null, parentRef)

    return <div>
        <div className="board-preview">

            <NavLink
                className={ (navData) => (navData.isActive ? 'active' : '') }
                to={ `/board/${board._id}` }>
                <div key={ idx } className="board-preview-card-wrapper">
                    <div className="board-preview-card">
                        <div className="board-icon"><Board /></div>
                        <div className="board-title-container">
                            <div className="board-title">{ board.title }</div>
                            <div ref={ parentRef } className="board-dropdown-menu" onClick={ () => setIsAddModalOpen(!isAddModalOpen) }>
                                { isAddModalOpen &&
                                    <div ref={ wrapperRef } className="board-add-modal">
                                        <div className="btns-top-add-modal">
                                            <div className="btn-modal-top-add-section" >
                                                <span onClick={ (ev) => removeBoard(board._id, ev.preventDefault()) }> {/* <AiOutlineDelete /> */ }Delete</span>
                                            </div>
                                            <div className="btn-modal-top-add-section"><span>Rename</span></div>
                                            <div className="border"></div>
                                        </div>
                                        <div className="btns-bottom-add-modal">
                                            <div className="btn-modal-doc" ><span>Archive</span></div>
                                            <div className="border"></div>
                                            <div className="btn-modal-add-remove"> <span>Move To Folder</span> </div>
                                        </div>
                                    </div>
                                }
                                <div className="btn-board-remove"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>

}