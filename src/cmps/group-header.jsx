import { useState } from 'react'

export function GroupHeader({ board, group, onUseBtn, onSaveGroup, onRemoveGroup, onUpdateColumns }) {

    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }
    return (
        <div className="group-header-wrppaer flex">
            {/* <div className="group-header-cmp flex" > */}
            {/* <div className="column-wrapper-title flex"> */}
            <div onClick={() => toggle('btns-modal')} className="btn-group-menu flex">🟢</div>
            {isBtnsModalOpen &&
                <div className='btns-modal'>
                    <button onClick={() => onUseBtn('add')}>Add group</button>
                    <button onClick={() => onUseBtn('remove')}>x</button>
                    <button onClick={() => onUseBtn('duplicate')}>Duplicate this group</button>
                    <button onClick={() => onUseBtn('rename')}>Rename group</button>
                </div>
            }
            {/* </div> */}
            <div className="title-inner-container flex">
                <div
                    suppressContentEditableWarning={true}
                    contentEditable={true}
                    onBlur={onSaveGroup}
                    // className="group-title text-component"
                    className="group-title flex"
                // style={{ color: "#037f4c" }} 
                >
                    {group.title && group.title}
                </div>
            </div>
            {/* </div> */}

            <div className="column-wrapper-row-columns flex">
                {board.columns.map((column, idx) =>
                    <div className='draggable'>
                        <div className="group-column-list">
                            <div
                                className="group-column"
                                suppressContentEditableWarning={true}
                                onBlur={onUpdateColumns}
                                contentEditable={true}
                                title={column}
                                key={idx}
                                idx={idx}>
                                {column}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="column-wrapper-add">+</div>
        </div>
    )
}