import { BoardPreview } from "./board-preview";



export function BoardGroup({ items }) {
    return <div className="board-group">
        <div className="board-group-wrapper">
            <div className="border-group-content">
                {items.map((item, idx) => <BoardPreview item={item} key={idx} />)}
                <input type="text" placeholder="+ Add Item" />
            </div>
        </div>
    </div>
}