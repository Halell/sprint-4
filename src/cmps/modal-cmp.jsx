import { ReactComponent as Time } from '../assets/svg/time.svg'
import { ReactComponent as User } from '../assets/svg/user.svg'
import userImg from '../assets/img/carmel.png'

export function ActivityModal({ activity, }) {
    return <div className="single-activity flex" >
        <div className="activity-box flex">
            <div className="activity-time flex">
                <Time />
                <div>{activity.createdAt}</div>
            </div>
            <div className="activity-member flex">
                <img src={userImg} />
                {/* {'Carmel'} */}
                {activity.byMember.fullname}
            </div>
            <div className="activity flex">
                {activity.txt}
            </div>
            {activity.from &&
                <div className="activity-info flex" >
                    <div className="from flex" style={activity.style && { backgroundColor: activity.style.from }}>
                        {activity.from}
                    </div>
                    <div className="arrow-to">{'>'}</div>
                    <div className="to flex" style={activity.style && { backgroundColor: activity.style.to }}>
                        {activity.to}
                    </div>
                </div>
            }
        </div>
    </div>
}