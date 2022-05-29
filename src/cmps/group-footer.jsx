import { useState, Fragment } from 'react'
import { TaskList } from "./task-list"
import { GroupHeader } from "./group-header"

import { useSelector } from 'react-redux'

export function GroupFooter({ group, onAddTask }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isNewTaskEdit, setIsNewTaskEdit] = useState(false)

    const onSaveTask = (ev) => {
        const task = {
            title: ev.target.innerText
        }
        if (task.title) onAddTask(board, group.id, task)
        setIsNewTaskEdit(!isNewTaskEdit)
    }

    const handleKeyPressAddTask = (event) => {
        if (event.key === 'Enter') {
            // console.log(group.id)
            onSaveTask(event)
        }
    }

    const inputRef = (elInput) => {
        if (elInput) elInput.focus()
    }
    return (
        <div className="pulse-component-wrapper group-footer">
            <div className="group-footer pulse-component">
                <div className="title-container">
                    <div className="btn-pulse-menu-wrapper" ></div>
                    <div className="title-cell-component group-footer" >
                        <div className="pulse-left-indicator"/*{ enter color obj here } */></div>

                        { isNewTaskEdit ? <div className="title-component "
                            ref={ inputRef }
                            suppressContentEditableWarning={ true }
                            contentEditable={ true }
                            onBlur={ onSaveTask }
                            onKeyPress={ handleKeyPressAddTask }
                        >
                        </div>
                            : <div className="title-component "
                                onClick={ () => setIsNewTaskEdit(!isNewTaskEdit, inputRef()) }

                            >+Add Item</div>
                        }
                    </div>
                </div>
                <div className="footer-spacer">
                    <div></div>
                </div>
            </div>
        </div>
    )
}