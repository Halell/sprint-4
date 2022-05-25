import { Component } from 'react'
import { BoardHeader } from './board-header'
import { GroupList } from './board-group'

export class Board extends Component {
    items = [
        {
            id: 101,
            name: 'Task-1',
            status: 'Done!'
        },
        {
            id: 102,
            name: 'Task-2',
            status: 'Stuck'
        },
        {
            id: 103,
            name: 'Task-3',
            status: 'Working on it!'
        }
    ]
    render() {
        return (
            <section >
                <BoardHeader />
                <GroupList items={this.items} />
            </section >
        )
    }
}
