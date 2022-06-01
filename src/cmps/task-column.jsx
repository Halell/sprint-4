import { useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Calendar } from 'react-date-range'
import { LabelsModal } from "./labels-modal"
import { ReactComponent as InviteSvg } from '../assets/svg/invite.svg'
import { ReactComponent as RemoveSvg } from '../assets/svg/remove.svg'
import { ReactComponent as UserSvg } from '../assets/svg/user.svg'
import userImg from '../assets/img/carmel.png'

export function TaskColumn({ board, boardColumn, task, setStatus, statusBgcColor, importanceBgcColor, setTxt, setMember, removeMember, addUser, handleSelect }) {

    const [isImportanceEdit, setIsImportanceEdit] = useState(false)
    const [isStatusEdit, setIsStatusEdit] = useState(false)
    const [isDateEdit, setIsDateEdit] = useState(false)
    const [isPersonsModal, setPersonsEdit] = useState(false)
    const [isInputOpen, setopenInput] = useState(false)
    const [user, setUser] = useState({ fullname: '' })

    const setColumn = (val) => {
        if (val === 'status') setIsStatusEdit(!isStatusEdit)
        if (val === 'importance') setIsImportanceEdit(!isImportanceEdit)
        if (val === 'persons') setPersonsEdit(!isPersonsModal)
    }

    const openDateModal = () => {
        setIsDateEdit(!isDateEdit)
    }

    const onSubmit = (el) => {
        el.preventDefault()
        const name = { ...user.fullname.split('@') }
        addUser(name[0])
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const { value } = target
        setUser({ ...user, [field]: value })
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
        {boardColumn === 'status' && <div style={{ backgroundColor: statusBgcColor }} onClick={() => setColumn(boardColumn)} className="task-column task-column-status">
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
            <div onClick={() => setIsDateEdit(isDateEdit ? false : true)}>{task.date}</div>
            {isDateEdit &&
                <div className="date-picker">
                    <Calendar date={new Date()}
                        onChange={handleSelect} />
                </div>
            }
        </div>}

        {/* persons */}
        {boardColumn === 'persons' && <div onClick={() => setColumn(boardColumn)} className="task-column member-col">
            <div className="add-member flex">
                {(task.persons.length > 2) ?
                    <div className="person-display-container">{task.persons.length}</div>
                    :
                    <div className="person-display-container"><UserSvg /></div>
                }
            </div>
        </div>}
        {isPersonsModal &&
            <div className="person-menu menu-modal flex column">
                <div className="person-menu flex column">
                    <div className="item-member-list flex">
                        {task.persons.map((person, idx) => {
                            return <div key={idx} className="member-box flex ">
                                <img src="" alt="" />
                                {person.fullname}
                                <div onClick={() => removeMember(idx)} className="svg flex"> <RemoveSvg /></div>
                            </div>
                        })}
                    </div>

                    <div className="search-persons"><input type="text" placeholder="Enter name" /></div>

                    <div className="divider"></div>
                    {board.persons && board.persons.map((person, idx) => {
                        {
                            const taskPersons = Array.from(task.persons.map(person => person.fullname))
                            return !taskPersons.includes(person.fullname) &&
                                < div onClick={() => setMember(person)} className="wrapper" key={idx}>
                                    <div className="add-member-box flex">
                                        <div className="img-user flex">
                                            <img src={userImg} />
                                        </div>
                                        <div className="user-full-name flex">{person.fullname}</div>
                                    </div>
                                </div>
                        }
                    })

                    }
                    <div
                        onClick={() => setopenInput(isInputOpen ? false : true)}
                        className="invite flex">
                        <InviteSvg />
                        Invite a new member by username
                    </div>
                    {isInputOpen &&
                        <div className="invite-modal">
                            <form onSubmit={onSubmit}>
                                <input
                                    type='text'
                                    placeholder="Invite by email"
                                    value={user.fullname}
                                    name='fullname'
                                    onChange={handleChange}>
                                </input>
                            </form>
                        </div>
                    }
                </div>
            </div>
        }

        {/* importance */}
        {
            boardColumn === 'importance' && <div style={{ backgroundColor: importanceBgcColor }} onClick={() => setColumn(boardColumn)} className="task-column task-column-status">
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