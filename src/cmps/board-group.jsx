import { TaskList } from "./task-list"
import { useFormRegister } from "../hooks/useFormRegister"

export function BoardGroup({ group, onSetTask, columns }) {
    const [register] = useFormRegister({
        taskTitle: ""
    }, onSetTask)
    console.log(columns)
    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div className="btn-group-menu flex">🟢</div>
                    <div className="title-inner-container">
                        <div>
                            <div className="group-title text-component" style={ { color: "#037f4c" } } >{ group.title }</div>
                        </div>
                    </div>

                </div>
                <div className="column-wrapper-columns">
                    { columns.map(column =>
                        <div className="columns">{ column }</div>
                    ) }
                </div>
                <div className="column-wrapper-add">+</div>
            </div>
            <TaskList group={ group } />
            <section >
                <label htmlFor="model">Model</label>
                <input { ...register('taskTitle') } />
            </section>
        </div>
    )
}