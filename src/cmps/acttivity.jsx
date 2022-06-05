import { useState } from 'react'
import { ReactComponent as CloseBtn } from '../assets/svg/close.svg'

import { ActivityModal } from './modal-cmp'

export function ActivityLog({ board, setActivityOpen }) {
    const [isShown, setIsShown] = useState(false)

    return <div className="activity-log-panel flex">

        <div className="activity-log-header ">
            <div onClick={() => setActivityOpen(false)} className="activity-log-close-btn">
                <CloseBtn />
            </div>
            <div className="activity-title flex">{board.title} log</div>
            <div className="tabs-wrapper flex">
                <div className={`activity-tab ${isShown ? 'shown' : ''}`}>
                    Activity
                </div>
                <div className={`update-tab  ${isShown ? '' : 'shown'}`}>
                    Updates
                </div>
            </div>
        </div>
        <div className={`activity-log-wrapper flex column ${isShown ? 'shown' : ''}`}>
            {board.activities.map((activity, idx) => {
                return <ActivityModal activity={activity} key={idx} />
            })}
        </div>
    </div>
}