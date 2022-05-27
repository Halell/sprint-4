import { Fragment } from 'react'

import { TaskPreview } from './task-preview'

export function TaskList({ group, onAddTask, columns }) {

    return (
        <Fragment>
            { group.tasks.map((task, idx) =>
                <TaskPreview
                    onAddTask={ onAddTask }
                    task={ task }
                    key={ idx }
                    columns={ columns }
                />) }
        </Fragment>
    )
}