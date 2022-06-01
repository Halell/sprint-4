import { Fragment, useState } from 'react'
import { TaskPreview } from './task-preview'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { utilService } from '../services/util.service'

export function TaskList({ board, group, onUpdateTask, onRemoveTask, onAddGroup, onAddTask }) {

    const [dragTasks, setDragTask] = useState(group.tasks)
    // let dargTasks = group.tasks



    function handleOnDragEnd(res) {
        if (!res.destination) return
        const tasks = Array.from(dragTasks)
        const [reorederdTask] = tasks.splice(res.source.index, 1)
        tasks.splice(res.destination.index, 0, reorederdTask)
        group.tasks = tasks
        setDragTask(tasks)
        console.log(group.tasks)
        onAddGroup(group)
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            {dragTasks.map((task, idx) => {
                return (
                    <Droppable droppableId={utilService.makeId()} key={utilService.makeId()}>
                        {(provided) =>
                            <div className="task-list-drag" {...provided.droppableProps} ref={provided.innerRef} >
                                <Draggable key={task.id} draggableId={task.id} index={idx}>
                                    {(provided) =>
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <TaskPreview
                                                onRemoveTask={onRemoveTask}
                                                group={group}
                                                onUpdateTask={onUpdateTask}
                                                task={task}
                                                board={board}
                                            />
                                        </div>
                                    }
                                </Draggable>
                                {provided.placeholder}
                            </div>
                        }
                    </Droppable>
                )
            })}
        </DragDropContext>
    )
}