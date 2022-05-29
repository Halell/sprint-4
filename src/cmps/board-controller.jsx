import { useState } from 'react'

export const BoardController = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [style, setStyle] = useState({})
    const [className, setClassName] = useState("")

    const toggleController = () => {
        setIsOpen(isOpen ? false : true)
        setClassName(isOpen ? "pinned" : "")
        setStyle(isOpen ? { width: '225px' } : { width: '30px' })
    }

    const onAddBoard = () => {
        console.log('Adding board!')
    }

    return (
        <main style={style} className="board-controller board-controller" >
            <button className={"controller-btn " + className} onClick={() => toggleController()}>{isOpen ? '>' : '<'}</button>

            {!isOpen &&
                <div className="controller-container">
                    <button className="controller-add-btn" onClick={() => { onAddBoard() }}>+ Add</button>
                    <div
                        suppressContentEditableWarning={true}
                        contentEditable={true}>
                        Search
                    </div>
                    <hr />
                    <ul>
                        <li>Board 1 <button>...</button></li>
                        <li>Board 2 <button>...</button></li>
                        <li>Board 3 <button>...</button></li>
                    </ul>
                    {/* {boards && boards.title} */}
                </div>

            }

        </main>
    )
}