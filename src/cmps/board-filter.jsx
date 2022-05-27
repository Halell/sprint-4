import { useFormRegister } from "../hooks/useFormRegister"
import { useState } from 'react'



export const BoardFilter = ({ onAddGroup, onChangeFilter, getPersons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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


    return (
        <div>
            <button onClick={() => onAddGroup()} className="new-item-btn">New Item</button>
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