import { useState } from 'react'

export function GroupHeader({ board, group, onUseBtn, onSaveGroup, onRemoveGroup, onUpdateColumns }) {

    const [isBtnsModalOpen, setIsBtnsModalOpen] = useState(false)
    const toggle = (val) => {
        if (val === 'btns-modal') {
            setIsBtnsModalOpen(isBtnsModalOpen ? false : true)
        }
    }
    return (
        <div className=" pulse-component-wrapper group-header-wrapper">
            <div className="pulse-component">
                <div className="title-container group-title-wrapper">
                    <div className="btn-pulse-menu-wrapper btn-group-menu-wrapper"
                        onClick={() => toggle('btns-modal')}>
                        <div className="btn-group-menu">▼</div>
                    </div>
                    <div className="title-cell-component">
                        <div className="title-inner-wrapper group-header">
                            <div className="cell-component title-cell group-header" >
                                <div className="title-cell-component">
                                    <div className="pulse-left-indicator group-header"/*{ enter color obj here } */></div>
                                    <div className="drag-btn flex">
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M7.5 4C6.67157 4 6 3.32843 6 2.5 6 1.67157 6.67157 1 7.5 1 8.32843 1 9 1.67157 9 2.5 9 3.32843 8.32843 4 7.5 4zM12.5 4C11.6716 4 11 3.32843 11 2.5 11 1.67157 11.6716 1 12.5 1 13.3284 1 14 1.67157 14 2.5 14 3.32843 13.3284 4 12.5 4zM7.5 9C6.67157 9 6 8.32843 6 7.5 6 6.67157 6.67157 6 7.5 6 8.32843 6 9 6.67157 9 7.5 9 8.32843 8.32843 9 7.5 9zM12.5 9C11.6716 9 11 8.32843 11 7.5 11 6.67157 11.6716 6 12.5 6 13.3284 6 14 6.67157 14 7.5 14 8.32843 13.3284 9 12.5 9zM7.5 14C6.67157 14 6 13.3284 6 12.5 6 11.6716 6.67157 11 7.5 11 8.32843 11 9 11.6716 9 12.5 9 13.3284 8.32843 14 7.5 14zM7.5 19C6.67157 19 6 18.3284 6 17.5 6 16.6716 6.67157 16 7.5 16 8.32843 16 9 16.6716 9 17.5 9 18.3284 8.32843 19 7.5 19zM12.5 14C11.6716 14 11 13.3284 11 12.5 11 11.6716 11.6716 11 12.5 11 13.3284 11 14 11.6716 14 12.5 14 13.3284 13.3284 14 12.5 14zM12.5 19C11.6716 19 11 18.3284 11 17.5 11 16.6716 11.6716 16 12.5 16 13.3284 16 14 16.6716 14 17.5 14 18.3284 13.3284 19 12.5 19z" fill="currentColor"></path></svg>
                                    </div>
                                    <div className="title-cell-text">

                                        <div className="title-component">
                                            <div
                                                suppressContentEditableWarning={true}
                                                contentEditable={true}
                                                onBlur={onSaveGroup}
                                                className="group-title flex"
                                            >
                                                {group.title && group.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cells-row-container">
                    <div className="cells-row-component">
                        {board.columns.map((column, idx) =>
                            <div className='cell-component-wrapper draggable'>
                                <div className="cell-component-inner">
                                    <div
                                        className="cell-component group-column"
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
                </div>
                <div className="column-wrapper-add"></div>
            </div>
            {
                isBtnsModalOpen &&
                <div className='btns-modal'>
                    <button onClick={() => onUseBtn('add')}>Add group</button>
                    <button onClick={() => onUseBtn('remove')}>x</button>
                    <button onClick={() => onUseBtn('duplicate')}>Duplicate this group</button>
                    <button onClick={() => onUseBtn('rename')}>Rename group</button>
                </div>
            }
        </div >
    )
}