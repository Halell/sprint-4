import { BoardFilter } from "./board-filter"

export function BoardHeader({ onAddGroup, onChangeFilter, getPersons }) {
    return (
        <div className="board-header">
            <div className="board-header-content" >
                <div className="board-header-top">
                    <div className="board-header-top-top" >
                        <div className="top-container flex" >
                            <div className="left-container flex">
                                <div className="board-title">sprint 4fffffffffffffffffffffaaaaaaassssssssssssssssssssssssssssssssss</div>
                                <div>d</div>
                                <div>⭐</div>
                            </div>
                            <div>:::</div>
                        </div>
                        <div className="bottom-top-container">
                            <div className="desc" >add</div>
                        </div>
                    </div>
                    <div className="board-header-top-bottom flex" >
                        <div className="btn-defult-view" >
                            main table
                        </div>
                    </div>
                </div>
                <div className="board-header-bottom">
                    <div className="board-header-filter">
                        <BoardFilter
                            onAddGroup={ onAddGroup }
                            onChangeFilter={ onChangeFilter }
                            getPersons={ getPersons }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}