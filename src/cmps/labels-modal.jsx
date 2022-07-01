import { useRef, useEffect, useState } from "react"
import { useOutsideClick } from '../hooks/useClickOutsideParent'
import { ReactComponent as EditColor } from '../assets/svg/edit.colors.svg'
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { loadBoard } from '../store/action/board.actions'

export function LabelsModal({ setStatus, field, closeModal, parentRef }) {
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, closeModal, field, parentRef)
    const params = useParams()
    const dispatch = useDispatch()
    let { board } = useSelector((storeState) => storeState.boardModule)
    const [isChangeColor, setChangeColor] = useState(false)

    useEffect(() => {
        onLoadBoard()
        console.log(board)
    }, [])

    const onLoadBoard = async () => {
        await dispatch(loadBoard(params.id))
    }
    const vals = (field === 'status') ? ['done', 'working on it', 'stuck'] : ['high', 'mid', 'low']
    return (
        <>
            <div ref={wrapperRef}>
                {board && board.labels.map((label, idx) => {
                    if (idx > 4) return
                    else {
                        return <div
                            style={{ backgroundColor: label }}
                            className="btn-wraper"
                        >
                            <div onClick={() => setStatus(vals[idx], field, label)} className="status-edit-btn status-edit-btn-done">{vals[idx]}</div>
                        </div>
                    }
                })}
                <div className="btn-wraper"> <div className="status-edit-btn " ><div className="add-edit-btn flex "><EditColor />Add/Edit Labels</div></div></div>
                {/* {isChangeColor &&
                    <div className="color-pallete">
                        <div className="color-picker-wraper">
                            {board.labels && board.labels.map((label, idx) => {
                                return <div onClick={() => onchangeColor(label, group)} className="color-picker" key={idx} style={{ backgroundColor: label }}></div>
                            })}
                        </div>
                    </div>

                } */}
            </div>
        </>
    )
}