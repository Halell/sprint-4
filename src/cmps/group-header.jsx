import { useState } from 'react'

export function GroupHeader({ board, group, onSaveGroup, onARemoveGroup }) {

    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }
    return (
        <div className="group-header-wrppaer">
            <div className="group-header-cmp flex" >
                <div className="column-wrapper-title flex">
                    <div onClick={ () => toggle('btns-modal') } className="btn-group-menu flex">🟢</div>
                    { isBtnsModalOpen &&
                        <div className='btns-modal'>
                            <button>Add group</button>
                            <button onClick={ () => onARemoveGroup(group.id) }>x</button>
                            <button>Duplicate this group</button>
                            <button>Rename group</button>
                        </div>
                    }
                    <div className="title-inner-container">
                        <div>
                            <div contentEditable={ true }
                                onBlur={ onSaveGroup }
                                className="group-title text-component"
                                style={ { color: "#037f4c" } }
                            >
                                { group.title }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-wrapper-row-columns ">
                    { board.columns.map((column, idx) =>
                        <div className="column-cell-wrapper" key={ idx } >{ column }</div>
                    ) }
                </div>
                <div className="column-wrapper-add">+</div>
            </div>
        </div>
    )
}