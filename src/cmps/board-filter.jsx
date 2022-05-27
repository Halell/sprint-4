import { useState } from "react"
import { useFormRegister } from "../hooks/useFormRegister"



export const BoardFilter = ({ onAddGroup, onChangeFilter, getPersons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [className, setClassName] = useState("")

    const toggle = (val) => {
        if (val === 'person-modal') {
            setIsModalOpen(isModalOpen ? false : true)
        }
    }

    const [register] = useFormRegister({
        filterBy: {
            title: '',
            persons: ''
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
            <div className="person-btn" onClick={() => toggle('person-modal')}>persons</div>
            {isModalOpen &&
                <div className="person-modal" onBlur={() => toggle('person-modal')}>
                    <p className="first-txt-modal">Quick person filter</p>
                    <p className="second-txt-modal">Filter items and subitems by person</p>
                    <div onClick={getPersons} className="person-link" href=""><img className="person-img" src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="" /></div>
                </div>
            }
        </div>
    )
}