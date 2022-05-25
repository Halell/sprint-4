import { Component } from 'react'
import { BoardHeader } from './board-header'
import { GroupList } from './group-list'

export class Board extends Component {

    render() {
        console.log('dddd')
        return (
            <section >
                <BoardHeader />
                <GroupList />
            </section >
        )

    }
}
