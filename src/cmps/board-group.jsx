import { TaskList } from './task-list'


export function BoardGroup({ group, onAddTask }) {
    return <div className="group-header-wrppaer">
        <div className='group-header-cmp flex' >
            <div className='column-wrapper-title flex'>
                <div className='btn-group-menu'></div>
                <div></div>
            </div>
            <div className='column-wrapper'></div>
            <div className='column-wrapper-add'></div>
        </div>
        <TaskList group={group} onAddTask={onAddTask} />
        <input type="text" placeholder="+ Add Item" />
    </div>
}