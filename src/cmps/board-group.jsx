import { TaskList } from './task-list'


export function BoardGroup({ group }) {
    return <div className="group-header-wrppaer">
        <div className='group-header-cmp flex' >
            <div className='column-wrapper-title flex'>
                <div className='btn-group-menu flex'>🟢
                    <div className='group-title' >{group.title}</div>
                </div>
                <div></div>
            </div>
            <div className='column-wrapper'></div>
            <div className='column-wrapper-add'></div>
        </div>
        <TaskList group={group} />
        <input type="text" placeholder="+ Add Item" />
    </div>
}