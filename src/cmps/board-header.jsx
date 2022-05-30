import { Link } from "react-router-dom"
import { useState } from "react"


import { updateBoard } from "../store/action/board.actions"
import { BoardFilter } from "./board-filter"
import { ReactComponent as StarSvg } from '../assets/svg/star.svg'
import { ReactComponent as UserSvg } from '../assets/svg/user.svg'
import { ReactComponent as HideSecondSvg } from '../assets/svg/hide.second.svg'
import { FiUserPlus } from 'react-icons/fi'
<<<<<<< HEAD
=======
import { ReactComponent as ActivitySvg } from '../assets/svg/activity.svg'
import { useState } from "react"
import { ActivityLog } from "./acttivity"
import { boardService } from "../services/board.service"
>>>>>>> bc5a30169d197b6d18fac0f1fdaa267d26ee00f8


export function BoardHeader({ onAddGroup, onChangeFilter, getPersons, onSaveBoard, board, onAddTask, group }) {
    const [isActivityOpen, setActivityOpen] = useState(false)
    const [isMemberInvite, setInvite] = useState(false)
    const [user, setUser] = useState({ fullname: '' })

    function openActivty() {
        setActivityOpen(isActivityOpen ? false : true)
    }

    function updateBoardTitle(el) {
        const title = el.target.innerText
        board.title = title
        onSaveBoard(board)
    }

    function updateBoardDesc(el) {
        const desc = el.target.innerText
        board.desc = desc
        onSaveBoard(board)
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const { value } = target
        setUser({ ...user, [field]: value })
    }

    async function addMember(member) {
        board.persons.push(member)
        await boardService.setActivity(board, 'Added member')
        onSaveBoard(board)
    }

    const onSubmit = (el) => {
        el.preventDefault()
        const name = { ...user.fullname.split('@') }
        addMember(name[0])
    }


    return (
        <div className="board-header">
            <div className="board-header-content" >
                <div className="board-header-top">
                    <div className="board-header-top-top" >
                        <div className="top-container flex" >
                            <div className="left-container flex">
                                <div className="board-name flex">
                                    <div className="board-title">
                                        <div className="board-title-name"
                                            suppressContentEditableWarning={ true }
                                            contentEditable={ true }
                                            onBlur={ updateBoardTitle }
                                        >{ board.title }</div>
                                    </div>
                                    <div>
                                        <div className="btn-title-name" >
                                            <HideSecondSvg />
                                        </div>
                                    </div>
                                    <div className="btn-title-name">
                                        <StarSvg />
                                    </div>
                                </div>
                            </div>
                            <div className="right-container flex">
<<<<<<< HEAD
                                <div className="invite"><FiUserPlus />Invite/1</div>
                                <div onClick={ () => openActivty() } className="activity">
                                    Activity
=======
                                <div onClick={() => setInvite(isMemberInvite ? false : true)} className="invite"><FiUserPlus />Invite/1</div>
                                {isMemberInvite &&
                                    <div className="board-invite-modal">
                                        <h1><FiUserPlus />Invite/1</h1>
                                        <form onSubmit={onSubmit}>
                                            <input
                                                className="invite-input"
                                                type='text'
                                                placeholder="Invite by email"
                                                value={user.fullname}
                                                name='fullname'
                                                onChange={handleChange}>
                                            </input>
                                        </form>
                                    </div>
                                }
                                <div onClick={() => openActivty()} className="activity">
                                    <ActivitySvg /> Activity
>>>>>>> bc5a30169d197b6d18fac0f1fdaa267d26ee00f8
                                </div>
                                <div className="add-to-board">+ Add to board </div>
                                <div className="edit"></div>
                            </div>
                        </div>
                        <div className="bottom-top-container">
                            <div className="desc"
                                suppressContentEditableWarning={ true }
                                contentEditable={ true }
                                onBlur={ updateBoardDesc }
                            >{ board.desc ? board.desc : 'Add board description' } </div>
                        </div>
                    </div>
                    {/* <div className="board-header-top-bottom flex" >
                        <div className="btn-defult-view" >
                            main table
                        </div>
                    </div> */}
                </div>
                {/* <div className="board-header-bottom"> */ }
                <hr />
                <div className="board-header-filter flex">
                    <BoardFilter
                        onAddGroup={ onAddGroup }
                        onChangeFilter={ onChangeFilter }
                        getPersons={ getPersons }
                        board={ board }
                        onAddTask={ onAddTask }
                    />
                </div>
                {/* </div> */ }
            </div>

<<<<<<< HEAD
            { isActivityOpen &&

                <div className="activity-log-pannel">
                    <div className="">

                    </div>

                </div>

=======
            {isActivityOpen &&
                <ActivityLog board={board} setActivityOpen={setActivityOpen} />
>>>>>>> bc5a30169d197b6d18fac0f1fdaa267d26ee00f8
            }
        </div >
    )
}