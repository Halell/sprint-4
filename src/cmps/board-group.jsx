import { BoardPreview } from "./board-preview";



export function BoardGroup({ items }) {
    return <div className="group-list">
        {items.map((item, idx) => <BoardPreview item={item} key={idx} />)}
        <input type="text" placeholder="+ Add Item" />
    </div>
}