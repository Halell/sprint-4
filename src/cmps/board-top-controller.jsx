import { ReactComponent as Plus } from '../assets/svg/plus-sign.svg'
import { ReactComponent as Lightning } from '../assets/svg/lightning.svg'
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg'

export function BoardTopController({ addBoard }) {
    return <div>
        <div onClick={() => addBoard()} className="btn-add"><Plus /><span>Add</span></div>
        <div className="board-search-box">
            <Magnifier />
            <input type="text" placeholder="Search" />

            <div className="lightning-img-container">
                <div className="lightning-img-wrapper">
                    <Lightning />
                </div>
            </div>
        </div>
    </div>
}