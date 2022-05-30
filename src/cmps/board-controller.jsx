import { useState } from 'react'

export const BoardController = ({ onSetIsPinned, isPinned }) => {

    const [isExpend, setIsExpend] = useState(false)

    return (
        <main
            className={ `board-controller ${isExpend ? 'expend' : ''} ${isPinned ? 'pinned' : ''}` }
            onMouseEnter={ () => setIsExpend(!isExpend, console.log('ksks')) }
            onMouseLeave={ () => setIsExpend(!isExpend) }
        >
            <div className={ "controller-btn " }
                // onMouseOver={ () => setIsExpend(isExpend) }
                onClick={ onSetIsPinned }>
                { isPinned ? '>' : '<' }
            </div>

            {
                // !IsPinned &&
                // <div className="controller-container">
                //     <button className="controller-add-btn" onClick={ () => { onAddBoard() } }>+ Add</button>
                //     <div
                //         suppressContentEditableWarning={ true }
                //         contentEditable={ true }>
                //         Search
                //     </div>
                //     <hr />
                //     <ul>
                //         <li>Board 1 <button>...</button></li>
                //         <li>Board 2 <button>...</button></li>
                //         <li>Board 3 <button>...</button></li>
                //     </ul>
                //     {/* {boards && boards.title} */ }
                // </div>

            }

        </main >
    )
}