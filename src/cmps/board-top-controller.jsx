import { useState, useRef } from "react"

import { useOutsideClick } from '../hooks/useClickOutsideParent'

import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'
import { ReactComponent as BoardSvg } from '../assets/svg/board.svg'
import { ReactComponent as DocSvg } from '../assets/svg/doc.svg'
import { ReactComponent as DashSvg } from '../assets/svg/dash.svg'
import { ReactComponent as FolderSvg } from '../assets/svg/folder.svg'


export function BoardTopController({ addBoard }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const wrapperRef = useRef(null)
    const parentRef = useRef(null)
    useOutsideClick(wrapperRef, setIsAddModalOpen, null, parentRef)

    return (
        <>
            <div ref={ parentRef } onClick={ () => setIsAddModalOpen(!isAddModalOpen) } className="btn-add"><Plus /><span>Add</span> {
                isAddModalOpen &&
                <div ref={ wrapperRef } className="board-add-modal">
                    <div className="btns-top-add-modal">
                        <div className="btn-modal-top-add-section" onClick={ () => addBoard() }>
                            <BoardSvg />
                            <span> New Board</span>
                        </div>
                        <div className="btn-modal-top-add-section"><DashSvg /><span>New Dashboard</span></div>
                        <div className="border"></div>
                    </div>
                    <div className="btns-bottom-add-modal">
                        <div className="btn-modal-doc" ><DocSvg /><span>New Doc</span></div>
                        <div className="border"></div>
                        <div className="btn-modal-add-remove"><FolderSvg /> <span>New Folder</span> </div>
                    </div>
                </div>
            }</div>
            <div className="board-search-box">
                <Magnifier />
                <input type="text" placeholder="Search" />

                <div className="lightning-img-container">
                    <div className="lightning-img-wrapper">
                        <Lightning />
                    </div>
                </div>
            </div>
        </>
    )
}