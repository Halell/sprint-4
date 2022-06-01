import { Fragment, useState } from 'react'
import { TaskPreview } from './task-preview'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { utilService } from '../services/util.service'

export function TaskList({ board, group, onUpdateTask, onRemoveTask, onAddTask }) {


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