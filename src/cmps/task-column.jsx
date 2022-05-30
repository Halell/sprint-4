import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
export function TaskColumn({ column: boardColumn, setColumn, task, isStatusEdit, setStatus, statusBgcColor, isImportanceEdit, openDateModal, importanceBgcColor, setTxt, isDateEdit, startdate, setStartDate }) {

    return <div className="task-columns-wraper " >
        {boardColumn === 'text' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            <div
                suppressContentEditableWarning={true}
                contentEditable={true}
                onBlur={setTxt}
            >{task.text}
            </div>
        </div>}


        {/* status */}
        {boardColumn === 'status' && <div style={{ backgroundColor: statusBgcColor }} onClick={() => setColumn(boardColumn)} className="task-column">
            {task.status}
            {isStatusEdit &&
                <div className="column-modal">

                    <div style={{ backgroundColor: 'rgb(0, 200, 117)' }} className="btn-wraper"> <div onClick={() => setStatus('done')} className="status-edit-btn status-edit-btn-done">done!</div></div>
                    <div style={{ backgroundColor: 'rgb(253, 171, 61)' }} className="btn-wraper"> <div onClick={() => setStatus('in-progress')} className="status-edit-btn in-progress">in progress</div></div>
                    <div style={{ backgroundColor: 'rgb(226, 68, 92)' }} className="btn-wraper"> <div onClick={() => setStatus('stuck')} className="status-edit-btn stuck">stuck</div></div>
                    <div style={{ backgroundColor: 'rgb(173, 150, 122)' }} className="btn-wraper"> <div onClick={() => setStatus('no-status')} className="status-edit-btn stuck"></div>none</div>
                    <div className="btn-wraper"> <div className="status-edit-btn add-edit-labels">Add/Edit Labels</div></div>

                </div>
            }
        </div>
        }





        {/* date */}
        {boardColumn === 'date' && <div onClick={() => openDateModal(openDateModal)} className="task-column">
            {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
            {task.date}
            {isDateEdit &&
                <div className="column-modal">
                    <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                </div>
            }
        </div>}




        {/* persons */}
        {boardColumn === 'persons' && <div onClick={() => setColumn(boardColumn)} className="task-column">
            {task.persons}
        </div>}




        {/* importance */}
        {boardColumn === 'importance' && <div style={{ backgroundColor: importanceBgcColor }} onClick={() => setColumn(boardColumn)} className="task-column">
            {task.importance}
            {isImportanceEdit &&
                <div className="column-modal">

                    <div style={{ backgroundColor: 'rgb(0, 200, 117)' }} className="btn-wraper"> <div onClick={() => setStatus('high')} className="status-edit-btn status-edit-btn-done">high</div></div>
                    <div style={{ backgroundColor: 'rgb(253, 171, 61)' }} className="btn-wraper"> <div onClick={() => setStatus('mid')} className="status-edit-btn in-progress">mid</div></div>
                    <div style={{ backgroundColor: 'rgb(226, 68, 92)' }} className="btn-wraper"> <div onClick={() => setStatus('low')} className="status-edit-btn stuck">low</div></div>
                    <div style={{ backgroundColor: 'rgb(173, 150, 122)' }} className="btn-wraper"> <div onClick={() => setStatus('very-low')} className="status-edit-btn stuck"></div>none</div>
                    <div className="btn-wraper"> <div className="status-edit-btn add-edit-labels">Add/Edit Labels</div></div>

                </div>
            }
        </div>}




    </div>


}