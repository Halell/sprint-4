

export function TaskPreview({ task, onAddTask, columns }) {
    // console.log(task)
    return (
        <div className="pulse-component-wrapper">
            <div className="pulse-component" >
                <div className="title-container">
                    <div className="btn-pulse-menu">◉</div>
                    <div className="title-inner-container">
                        <div className="title-inner-wrapper">
                            <div className="cell-component title-cell"  >
                                <div className="title-cell-component">
                                    <div className="pulse-left-indicator">T</div>
                                    <div className="title-cell-text">
                                        <div className="edit-icon-wrapper"></div>
                                        <div className="title-component"></div>
                                    </div>
                                    <div className="conversation-indicator-component">T</div>
                                    { task && task.title }
                                    <button onClick={ () => onAddTask() } className=" edit-btn">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cells-row-container">
                    <div className="cells-row-component">
                        { columns.map((column, idx) =>
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
