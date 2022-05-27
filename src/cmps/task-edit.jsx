import { useState, useEffect } from 'react'
import { updateBoard } from '../store/action/board.actions'



export function TaskEdit({ task, onUpdateTask, group, toggle }) {
    let title = ''
    const groupId = group.id

    const onSaveTask = (ev) => {
        ev.preventDefault()
        task.title = title
        onUpdateTask(task, groupId)
        toggle('btn-input')
    }

    const handleChange = ({ target }) => {
        title = target.value
    }

    return (
        <form onSubmit={onSaveTask}>
            <input type="text" name="title" onChange={handleChange} onBlur={() => toggle('btn-input')} />
        </form>
    )
}