import { useState } from "react"
import { useFormRegister } from "../hooks/useFormRegister"



export const BoardFilter = ({ onAddGroup, onChangeFilter }) => {
    const [className, setClassName] = useState("")
    const [register] = useFormRegister({
        filterBy: {
            title: ''
        },
    }, onChangeFilter)

    const openModal = () => {
        console.log('Opening!')
        if (className === "open") setClassName("")
        else setClassName("open")

    }

    return (
        <div>
            <div className="new-item-wraper flex">
                    <button onClick={() => onAddGroup()} className="new-item-btn">New Item</button>
                    <button onClick={() => openModal()} className="new-item-modal-btn">\/</button>
            </div>

            <div className={"new-item-modal " + className}>
                <div className="new-item-modal-opend" >
                    <div className="new-group-of-items">
                        <button className="btn-new-group-of-items">New group of items</button>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="title">filter</label>
                <input {...register('title')} />
            </div>
        </div>
    )
}