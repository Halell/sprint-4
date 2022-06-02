import { ReactComponent as CloseBtn } from '../assets/svg/close.svg'

import { ActivityModal } from './modal-cmp'

export function ActivityLog({ board, setActivityOpen }) {


    return <div className="activity-log-panel flex">

        <div className="activity-log-header ">
            <div onClick={() => setActivityOpen(false)} className="activity-log-close-btn">
                <CloseBtn />
            </div>
            <div className="activity-title flex">{board.title} log</div>
            <div className="tabs-wrapper flex">
                <div className="activity-tab ">
                    Activity
                </div>
                <div className="activity-tab">
                    Updates
                </div>
            </div>
        </div>
        <div className="activity-log-wrapper flex column">
            {board.activities.map((activity, idx) => {
                return <ActivityModal activity={activity} key={idx} />
            })}
        </div>
    </div>
}