import { Fragment } from "react";


export function LabelsModal({ setStatus, field }) {
    return <Fragment>
        <div style={{ backgroundColor: 'rgb(0, 200, 117)' }} className="btn-wraper"> <div onClick={() => setStatus('high', field)} className="status-edit-btn status-edit-btn-done">high</div></div>
        <div style={{ backgroundColor: 'rgb(253, 171, 61)' }} className="btn-wraper"> <div onClick={() => setStatus('mid', field)} className="status-edit-btn in-progress">mid</div></div>
        <div style={{ backgroundColor: 'rgb(226, 68, 92)' }} className="btn-wraper"> <div onClick={() => setStatus('low', field)} className="status-edit-btn stuck">low</div></div>
        <div style={{ backgroundColor: 'rgb(173, 150, 122)' }} className="btn-wraper"> <div onClick={() => setStatus('very-low', field)} className="status-edit-btn stuck">none</div></div>
        <div className="btn-wraper"> <div className="status-edit-btn add-edit-labels">Add/Edit Labels</div></div>
    </Fragment>
}