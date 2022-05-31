import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { AppSideBar } from '../cmps/app-side-bar'
import { BoardController } from '../cmps/board-controller'
import { Board } from '../cmps/board'
import { Workspace } from '../pages/work-space'

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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
                        isPinned={ isPinned }
                        onSetIsPinned={ onSetIsPinned }
                    />
                    <Routes>
                        <Route path='/:id' element={ <Board isPinned={ isPinned } /> } />
                        <Route path='/' element={ <Workspace isPinned={ isPinned } /> } />

                    </Routes>
                </section>
            </div>
        </main>
    )
}