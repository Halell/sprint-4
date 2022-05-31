import { useState } from 'react'

import { AppSideBar } from '../cmps/app-side-bar'
import { BoardController } from '../cmps/board-controller'
import { Board } from '../cmps/board.jsx'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export const MainApp = () => {
    const [isPinned, setIsPinned] = useState(false)
    const onSetIsPinned = () => {
        setIsPinned(!isPinned)
        console.log(isPinned)
    }



    return (
        <main className="application">
            <div className="app-wrapper">
                <div className="base-layer">
                    <AppSideBar />
                    <div className="app-base-surface"></div>
                </div>
                <section className="work-space">
                    <BoardController
                        isPinned={isPinned}
                        onSetIsPinned={onSetIsPinned}
                    />
                    <Board isPinned={isPinned} />
                </section>
            </div>
        </main>
    )
}