import { TaskEdit } from './task-edit'
import { useState } from 'react'
import { TitleCell } from './title-cell.jsx'

export function TaskPreview({ board, task, onUpdateTask, group, onRemoveTask }) {

    const [isBtnInputOpen, setIsBtnInputOpen] = useState(true)

    const toggle = (val) => {
        if (val === 'btn-input') {
            setIsBtnInputOpen(isBtnInputOpen ? false : true)
        }
    }
    // console.log(task)
    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <TitleCell
                    task={ task }
                    onUpdateTask={ onUpdateTask }
                    group={ group }
                />

                <div className="cells-row-container">
                    <div className="cells-row-component">
                        { board.columns.map((column, idx) =>
                            <div className="cell-component-wrapper" key={ idx } >
                                <div className="cell-component-inner">
                                    <div className="cell-component">
                                        { column }
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
                <div className="column-wrapper-add"></div>
            </div>
        </div>
    )
}

{/* <button onClick={() => onRemoveTask(group.id, task.id)} className="btn-side-task">🗑</button> */ }













