import { BoardPreview } from "./board-preview";



export function BoardGroup({ items }) {
    return <div className="board-group">
        {items.map((item, idx) => <BoardPreview item={item} key={idx} />)}
        <input type="text" placeholder="+ Add Item" />
    </div>
}