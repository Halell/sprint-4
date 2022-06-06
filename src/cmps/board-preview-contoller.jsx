import { useState } from "react"
import { NavLink } from "react-router-dom"

import { ReactComponent as Board } from '../assets/svg/board.svg'
import { FaTrash } from 'react-icons/fa'
// import { AiOutlineDelete } from 'react-icons/ai'

export function BoardPreview({ board, idx, removeBoard }) {
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)

    const toggle = (val) => {
        if (val === 'remove-modal') {
            setIsRemoveModalOpen(!isRemoveModalOpen)
        }
    }
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
                            <div className="board-dropdown-menu" onClick={ () => toggle('remove-modal') }>
                                { isRemoveModalOpen &&
                                    <div className="board-add-modal">
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
                                {/* onClick={(ev) => removeBoard(board._id, ev.preventDefault())}> */ }
                                <div className="btn-board-remove"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>

}