import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { LabelsModal } from "./labels-modal";

export function TaskColumn({ board, boardColumn, task, setStatus, statusBgcColor, importanceBgcColor, setTxt }) {

    const [startdate, setStartDate] = useState(new Date())
    const [isImportanceEdit, setIsImportanceEdit] = useState(false)
    const [isStatusEdit, setIsStatusEdit] = useState(false)
    const [isDateEdit, setIsDateEdit] = useState(false)
    const [isPersonsEdit, setPersonsEdit] = useState(false)

    const setColumn = (val) => {
        if (val === 'status') {
            setIsStatusEdit(isStatusEdit ? false : true)
        }
        if (val === 'importance') {
            setIsImportanceEdit(isImportanceEdit ? false : true)
        }
        if (val === 'persons') {
            setPersonsEdit(isPersonsEdit ? false : true)
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
        {isPersonsEdit &&
            <div className="person-menu menu-modal flex column">
                <div className="person-menu flex column">
                    <div className="search-persons"><input type="text" placeholder="Enter name" /></div>
                    <div className="divider"></div>
                    {board.persons.map(person => {
                        < div className="wrapper" >
                            <div className="add-member-box flex">
                                <div className="img-user flex">
                                    <img src="" />
                                </div>
                                <div className="user-full-name flex">user full name</div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        }
        {/* importance */}




        {
            boardColumn === 'importance' && <div style={{ backgroundColor: importanceBgcColor }} onClick={() => setColumn(boardColumn)} className="task-column">
                {task.importance}
                {isImportanceEdit &&
                    <div className="column-modal">
                        <LabelsModal setStatus={setStatus} field={'importance'} />
                    </div>
                }
            </div>
        }
    </div >
}