import { TaskList } from './task-list'


export function BoardGroup({ group }) {
    return <div className="board-group">
        <div className="board-group-wrapper">
            <div className="border-group-content">
                <TaskList group={group} />
                <input type="text" placeholder="+ Add Item" />
            </div>
        </div>
    </div>
}