
export function TaskColumn({ column: boardColumn, setColumn, task, isEdit, setStatus, bgColor }) {

    return <div className="task-columns-wraper " >
        {boardColumn === 'text' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            {task.text}
        </div>}
        {boardColumn === 'status' && <div style={{ backgroundColor: bgColor }} onClick={() => setColumn(boardColumn)} className="task-column">
            {task.status}
            {isEdit &&
                <div className="column-modal">

                    <div style={{ backgroundColor: 'rgb(0, 200, 117)' }} className="btn-wraper"> <div onClick={() => setStatus('done')} className="status-edit-btn status-edit-btn-done">done!</div></div>
                    <div style={{ backgroundColor: 'rgb(253, 171, 61)' }} className="btn-wraper"> <div onClick={() => setStatus('in progress')} className="status-edit-btn in-progress">in progress</div></div>
                    <div style={{ backgroundColor: 'rgb(226, 68, 92)' }} className="btn-wraper"> <div onClick={() => setStatus('stuck')} className="status-edit-btn stuck">stuck</div></div>
                    <div style={{ backgroundColor: 'grey' }} className="btn-wraper"> <div onClick={() => setStatus('no-status')} className="status-edit-btn stuck"></div>none</div>
                    <div className="btn-wraper"> <div className="status-edit-btn add-edit-labels">Add/Edit Labels</div></div>

                </div>}
        </div>
        }
        {boardColumn === 'date' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            {task.date}
        </div>}
        {boardColumn === 'persons' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            {task.persons}
        </div>}
        {boardColumn === 'importance' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            {task.importance}
        </div>}
    </div>


}