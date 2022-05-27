import { useFormRegister } from "../hooks/useFormRegister"



export const BoardFilter = ({ onAddGroup, onChangeFilter }) => {

    const [register] = useFormRegister({
        filterBy: {
            title: ''
        },
    }, onChangeFilter)

    return (
        <div>
            <button onClick={() => onAddGroup()} className="new-item-btn">New Item</button>
            <div>
                <label htmlFor="title">filter</label>
                <input {...register('title')} />
            </div>
        </div>
    )
}