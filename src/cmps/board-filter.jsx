import { useState } from "react"
import { useFormRegister } from "../hooks/useFormRegister"
import { ReactComponent as ArrowSvg } from '../assets/svg/arrow.svg'
import { ReactComponent as UserSvg } from '../assets/svg/user.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used





export const BoardFilter = ({ onAddGroup, onChangeFilter, getPersons, board }) => {
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
        <div className="header-bottom-main-wrapper">
            <div className="new-item-wraper flex">
                <div onClick={() => onAddGroup()} className="new-item-btn flex">New Item</div>
                <div className="new-item-modal-btn-wrpper">
                    {/* <div onClick={() => openModal()} className="new-item-modal-btn"><img src={filterSvg} alt="" /></div> */}
                    <div onClick={() => openModal()} className="new-item-modal-btn"><ArrowSvg /></div>
                </div>
            </div>

            <div className={"new-item-modal " + className}>
                <div className="new-item-modal-opend" >
                    <div className="new-group-of-items">
                        <button className="btn-new-group-of-items">New group of items</button>
                    </div>
                </div>
            </div>

            <div className="search-wrapper">
                <input className="search-input" placeholder=" search"  {...register('title')} />
            </div>
            <div className="filter-wrapper">
                <div className="filter-btn" onClick={() => toggle('person-modal')}>persons</div>
            </div>
            <div className="filter-wrapper">
                <div className="filter-btn">Filter</div>
            </div>
            <div className="filter-wrapper" >
                <div className="filter-btn">Sort</div>
            </div>
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