import { AppSideBar } from '../cmps/app-side-bar'
import { BoardController } from '../cmps/board-controller'
import { Board } from '../cmps/board.jsx'

export const MainApp = () => {


    return (
        <main className="application">
            <div className="app-wrapper">
                <div className="base-layer">
                    <AppSideBar />
                    <div className="app-base-surface"></div>
                </div>
                <section className="work-space">
                    <BoardController />
                    <Board />
                </section>
            </div>
        </main>
    )
}