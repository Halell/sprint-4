import { Fragment, useState } from 'react'
import { TaskPreview } from './task-preview'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { utilService } from '../services/util.service'

export function TaskList({ board, group, onUpdateTask, onRemoveTask, onAddGroup, onAddTask }) {

    // const [dragTasks, setDragTask] = useState(group.tasks)

    // function handleOnDragEnd(res) {
    //     console.log(res)
    //     if (!res.destination) return
    //     const tasks = Array.from(dragTasks)
    //     const [reorederdTask] = tasks.splice(res.source.index, 1)
    //     tasks.splice(res.destination.index, 0, reorederdTask)
    //     console.log(tasks)
    //     setDragTask(tasks)
    //     group.tasks = tasks
    //     onAddGroup(group)
    // }

    return (
        <Fragment>
            {group.tasks.map((task, idx) =>
                <TaskPreview
                    onRemoveTask={onRemoveTask}
                    group={group}
                    onUpdateTask={onUpdateTask}
                    task={task}
                    key={idx}
                    board={board}
                    onAddTask={onAddTask}
                />)}
        </Fragment>
    )
}