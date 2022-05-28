import { updateBoard } from "../store/action/board.actions"
import { BoardFilter } from "./board-filter"

export function BoardHeader({ onAddGroup, onChangeFilter, getPersons, onSaveBoard, board }) {


    function updateBoardTitle(el) {
        const title = el.target.innerText
        board.title = title
        onSaveBoard(board)
    }

    function updateBoardDesc(el) {
        const desc = el.target.innerText
        board.desc = desc
        console.log(board)
        onSaveBoard(board)
    }


    return (
        <div className="board-header">
            <div className="board-header-content" >
                <div className="board-header-top">
                    <div className="board-header-top-top" >
                        <div className="top-container flex" >
                            <div className="left-container flex">
                                <div className="board-name flex">
                                    <div className="board-title">
                                        <div className="board-title-name"
                                            suppressContentEditableWarning={true}
                                            contentEditable={true}
                                            onBlur={updateBoardTitle}
                                        >{board.title}</div>
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
                            <div className="desc"
                                suppressContentEditableWarning={true}
                                contentEditable={true}
                                onBlur={updateBoardDesc}
                            >{board.desc ? board.desc : 'Add board description'} </div>
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