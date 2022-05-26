import { TaskPreview } from './task-preview'

export function TaskList({ group, onAddTask, onUpdateTask, onRemoveTask }) {
    return (
        <div className="task-list">
            {group.tasks.map((task, idx) =>
                <TaskPreview
                    onRemoveTask={onRemoveTask}
                    group={group}
                    onUpdateTask={onUpdateTask}
                    onAddTask={onAddTask}
                    task={task}
                    key={idx}
                />)}
        </div>
    )
}