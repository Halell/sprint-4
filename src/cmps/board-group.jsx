import { TaskList } from './task-list'


export function BoardGroup({ group }) {
    return <div className="board-group">
        <TaskList group={group} />
        <input type="text" placeholder="+ Add Item" />
    </div>
}