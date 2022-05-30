import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { LabelsModal } from "./labels-modal";

export function TaskColumn({ boardColumn, task, setStatus, statusBgcColor, importanceBgcColor, setTxt }) {

    const [startdate, setStartDate] = useState(new Date())
    const [isImportanceEdit, setIsImportanceEdit] = useState(false)
    const [isStatusEdit, setIsStatusEdit] = useState(false)
    const [isDateEdit, setIsDateEdit] = useState(false)

    const setColumn = (val) => {
        if (val === 'status') {
            setIsStatusEdit(isStatusEdit ? false : true)
        }
        if (val === 'importance') {
            setIsImportanceEdit(isImportanceEdit ? false : true)
        }
    }

    const openDateModal = () => {
        setIsDateEdit(isDateEdit ? false : true)
    }

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
                    <LabelsModal setStatus={setStatus} field={'status'} />
                </div>
            }
        </div>
        }
        {/* date */}
        {boardColumn === 'date' && <div onClick={() => openDateModal(openDateModal)} className="task-column">
            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
            {/* {task.date} */}
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
                    <LabelsModal setStatus={setStatus} field={'importance'} />
                </div>
            }
        </div>}
    </div>
}