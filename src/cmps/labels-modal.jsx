import { Fragment, useRef } from "react"
import { useOutsideAlerter } from '../hooks/useClickOutsideParent'

export function LabelsModal({ setStatus, field, closeModal, parentRef }) {
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, closeModal, field, parentRef)
    console.log(parentRef)
    const vals = (field === 'status') ? ['done', 'working on it', 'stuck'] : ['high', 'mid', 'low']
    return <Fragment>
        <div ref={wrapperRef}>
            <div style={{ backgroundColor: 'rgb(0, 200, 117)' }} className="btn-wraper"> <div onClick={() => setStatus(vals[0], field)} className="status-edit-btn status-edit-btn-done">{vals[0]}</div></div>
            <div style={{ backgroundColor: 'rgb(253, 171, 61)' }} className="btn-wraper"> <div onClick={() => setStatus(vals[1], field)} className="status-edit-btn working-on-it">{vals[1]}</div></div>
            <div style={{ backgroundColor: 'rgb(226, 68, 92)' }} className="btn-wraper"> <div onClick={() => setStatus(vals[2], field)} className="status-edit-btn stuck">{vals[2]}</div></div>
            <div style={{ backgroundColor: 'rgb(173, 150, 122)' }} className="btn-wraper"> <div  onClick={() => setStatus('none', field)} className="status-edit-btn "><div style={{ color: 'rgb(173, 150, 122)'}} className="none">none</div></div></div>
            <div className="btn-wraper"> <div className="status-edit-btn add-edit-labels">Add/Edit Labels</div></div>
        </div>
    </Fragment>
}