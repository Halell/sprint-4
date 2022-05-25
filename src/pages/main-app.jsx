import { AppSideBar } from '../cmps/app-side-bar'
import { BoardController } from '../cmps/board-controller'
import { Board } from '../cmps/board.jsx'

export const MainApp = () => {


    return (
        <main>
            <div className="app flex">
                <AppSideBar />
                <div className="search-all-container"></div>
            </div>
            <section className="work-space">
                <BoardController />
                <Board  />
            </section>
        </main>
    )
}