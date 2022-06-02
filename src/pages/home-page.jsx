import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { onLogin, onSignup } from '../store/action/user.actions'
import { userService } from "../services/user.service"
import { Logo } from "../assets/img/logo1.png"

export const HomePage = () => {

    const dispatch = useDispatch()


    return (
        <div className="home-container">
            <div className="main-header">
                <div className="header-content">
                    <div className="left-content">
                        <div className="logo">
                            <img className="logo-img" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/monday_logo_icon_168967.png" alt="" />
                            <div className="logo-title"> Bit The List</div>
                        </div>
                        {/* <div className="nav-btn">Product</div>
                        <div className="nav-btn">Solutions</div>
                        <div className="nav-btn">Templates</div>
                        <div className="nav-btn">Pricing</div> */}
                    </div>
                    <div className="right-content">
                        <a className="login" href="">Log in</a>
                        <Link to={`/board/b101`}> <div className="started-btn">Get Started</div></Link>
                    </div>
                </div>
            </div>
            <main className="home-page-body">
                <div className="main-home-page">
                    <div className="home-page">
                        <div className="head-line">
                            <h1 className="head-line-title">Work Without Limits</h1>
                            <h2 className="head-line-title-sub">Easily build, run, and scale your dream workflows on one platform. what would you like to manage with us?</h2>
                        </div>
                        <Link to={`/board/b101`}> <div className="get-started-btn">GetStarted</div></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
