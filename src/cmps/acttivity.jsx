import { ReactComponent as CloseBtn } from '../assets/svg/close.svg'
import { ReactComponent as Time } from '../assets/svg/time.svg'

export function ActivityLog({ board, setActivityOpen }) {


    return <div className="activity-log-panel  flex">

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
                return <div className="single-activity flex" key={idx}>
                    <div className="activity-box flex">
                        <div className="activity-time flex">
                            <Time />
                            <div>{activity.createdAt}</div>
                        </div>
                        <div className="activity-member flex">
                           {activity.byMember.fullname}
                            <img src="" alt="" />
                        </div>
                        <div className="activity flex">
                            {activity.txt}
                        </div>
                        <div className="activity-info flex">
                            <div className="from flex">
                                {activity.from}
                            </div>
                            {'>'}
                            <div className="to flex">
                                {activity.to}
                            </div>

                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}