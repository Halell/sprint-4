

export function TaskPreview({ task, onAddTask, columns }) {
    // console.log(task)
    return (
        <div className="group-header-cmp flex" >
            <div className="column-wrapper-title flex">
                <div className="btn-group-menu flex">🟢</div>
                <div className="title-inner-container">
                    <div>
                        <div className="group-title text-component" style={ { color: "#037f4c" } } >
                            <div className="task-preview">
                                { task && task.title }
                                <button onClick={ () => onAddTask() } className=" edit-btn">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-wrapper-columns">
                { columns.map((column, idx) =>
                    <div key={ idx } >{ column }</div>
                ) }
            </div>
            <div className="column-wrapper-add">+</div>
        </div>
    )
}
