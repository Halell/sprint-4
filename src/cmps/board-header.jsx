import { BoardFilter } from "./board-filter"

export function BoardHeader({ onAddGroup, onChangeFilter, getPersons }) {
    return (
        <div className="board-header">
            <div className="board-header-content" >
                <div className="board-header-top">
                    <div className="board-header-top-top" >
                        <div className="top-container flex" >
                            <div className="left-container flex">
                                <div className="board-name flex">
                                    <div className="board-title">
                                        <h1 className="board-title-name" suppressContentEditableWarning={true}
                                            contentEditable={true}
                                        >My first board</h1>
                                    </div>
                                    <div className="btn-hide">
                                        <div >🎱</div>
                                    </div>
                                    <div className="btn-star">
                                        <div >⭐</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-top-container">
                            <div className="desc" suppressContentEditableWarning={true}
                                contentEditable={true}
                            >add</div>
                        </div>
                    </div>
                    <div className="board-header-top-bottom flex" >
                        <div className="btn-defult-view" >
                            main table
                        </div>
                    </div>
                </div>
                {/* <div className="board-header-bottom"> */}
                <hr />
                <div className="board-header-filter flex">
                    <BoardFilter
                        onAddGroup={onAddGroup}
                        onChangeFilter={onChangeFilter}
                        getPersons={getPersons}
                    />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}