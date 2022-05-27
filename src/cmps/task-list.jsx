import { Fragment } from 'react'

import { TaskPreview } from './task-preview'

export function TaskList({ board, group, onAddTask, onUpdateTask, onRemoveTask }) {

    return (
        <Fragment>
            { group.tasks.map((task, idx) =>
                <TaskPreview
                    onRemoveTask={ onRemoveTask }
                    group={ group }
                    onUpdateTask={ onUpdateTask }
                    onAddTask={ onAddTask }
                    task={ task }
                    key={ idx }
                    board={ board }
                />) }
        </Fragment>
    )
}