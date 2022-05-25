import { Component } from 'react'
import { BoardHeader } from './board-header'
import { GroupList } from './group-list'

export class Board extends Component {

    render() {
        return (
            <section className='board board-controller-pinned flex' >
                <BoardHeader />
                <GroupList />
            </section >
        )
    }
}
