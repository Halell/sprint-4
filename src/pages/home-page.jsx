import { useDispatch } from "react-redux"
import { onLogin, onSignup } from '../store/action/user.actions'

export const HomePage = () => {

    const dispatch = useDispatch()


    return (
        <div className="home-container">
            <div className="main-header">
                <div className="header-content">
                    <div className="left-content">
                        <a className="logo">
                            <img src="" alt="" />
                        </a>
                        <div className="nav-btn">Product</div>
                        <div className="nav-btn">Solutions</div>
                        <div className="nav-btn">Templates</div>
                        <div className="nav-btn">Pricing</div>
                    </div>
                    <div className="right-content">
                        <a className="login" href="">Log in</a>
                        <div className="started-btn">Get Started</div>
                    </div>
                </div>
            </div>
            <main className="home-page-body">
                <div className="main-home-page">
                    <div className="home-page">
                        <div className="head-line">
                            <h1 className="head-line-title">Work Without Limits</h1>
                            <h2 className="head-line-title-sub">Easily build, run, and scale your dream workflows on one platform. what would you like to manage with monday?</h2>
                        </div>
                        <div className="get-started-btn">GetStarted</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
