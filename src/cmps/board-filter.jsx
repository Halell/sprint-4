import { useFormRegister } from "../hooks/useFormRegister"



export const BoardFilter = ({ onAddGroup }) => {




    return (
        <button onClick={() => onAddGroup()} className="new-item-btn">New Item</button>
    )
}