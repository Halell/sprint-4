import { useState } from "react"
import { useFormRegister } from "../hooks/useFormRegister"
import { ReactComponent as ArrowSvg } from '../assets/svg/arrow.svg'
import { ReactComponent as UserSvg } from '../assets/svg/user.svg'
import { FiFilter } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlinePushpin } from 'react-icons/ai'
import { BsArrowDownUp, BsEyeSlash } from 'react-icons/bs'
import { RiLineHeight } from 'react-icons/ri'
import { CgColorBucket } from 'react-icons/cg'






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
        // console.log('Opening!')
        if (className === "open") setClassName("")
        else setClassName("open")

    }

    return (
        <div className="header-bottom-main-wrapper">
            <div className="new-item-wraper flex">
                <div onClick={ () => onAddGroup() } className="new-item-btn flex">New Item</div>
                <div className="new-item-modal-btn-wrpper">
                    {/* <div onClick={() => openModal()} className="new-item-modal-btn"><img src={filterSvg} alt="" /></div> */ }
                    <div onClick={ () => openModal() } className="new-item-modal-btn"><ArrowSvg /></div>
                </div>
            </div>

            <div className={ "new-item-modal " + className }>
                <div className="new-item-modal-opend" >
                    <div className="new-group-of-items">
                        <button className="btn-new-group-of-items">New group of items</button>
                    </div>
                </div>
            </div>

            <div className="search-wrapper">
                <input className="search-input" placeholder=" search"  { ...register('title') } />
            </div>
            <div className="filter-wrapper">
                <div className="filter-btn" onClick={ () => toggle('person-modal') }><FaRegUserCircle />persons</div>
            </div>
            <div className="filter-wrapper">
                <div className="filter-btn"><FiFilter /> Filter</div>
            </div>
            <div className="filter-wrapper" >
                <div className="filter-btn"><BsArrowDownUp />Sort</div>
            </div>
            <div className="filter-wrapper-small" >
                <div className="small-btn"><AiOutlinePushpin /></div>
            </div>
            <div className="filter-wrapper-small">
                <div className="small-btn"><BsEyeSlash /></div>
            </div>
            <div className="filter-wrapper-small">
                <div className="small-btn"><RiLineHeight /></div>
            </div>
            <div className="filter-wrapper-small" >
                <div className="small-btn"><CgColorBucket />/2</div>
            </div>
            { isModalOpen &&
                <div className="person-modal" onBlur={ () => toggle('person-modal') }>
                    <p className="first-txt-modal">Quick person filter</p>
                    <p className="second-txt-modal">Filter items and subitems by person</p>
                    <div onClick={ getPersons } className="person-link" href=""><img className="person-img" src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="" /></div>

                </div>
            }
        </div>
    )
}