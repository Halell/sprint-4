import { Component } from 'react'
import { BoardHeader } from './board-header'
import { BoardGroup } from './board-group'

export class Board extends Component {

    render() {
        return (
            <section className='board board-controller-pinned flex'>
                <BoardHeader />
                {/* <BoardGroup items={ this.items } /> */ }
            </section >
        )
    }
}
