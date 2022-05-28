import { Link } from "react-router-dom"
import { ReactComponent as MondayBlue } from '../assets/svg/monday.blue.svg'
import { ReactComponent as BellSvg } from '../assets/svg/bell.svg'
import { ReactComponent as InboxSvg } from '../assets/svg/inbox.svg'
import { ReactComponent as WorkSvg } from '../assets/svg/work.svg'
import { ReactComponent as StarSvg } from '../assets/svg/star.svg'


export const AppSideBar = () => {
    return (
        <div className="app-side-bar-container">
            <div className="app-side-bar-wrapper">
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <Link to={'/'} className="routs-link ">
                            <img className="surface-item-image" src="https://cdn.monday.com/images/logos/monday_logo_icon.png" />
                        </Link>
                    </div>
                </div>
                <div className="sep"> </div>
                <div className="scrollable-navigation-items-area">
                    <div className="top">
                        <div className="btn-rout-wrapper"><div className="btn-rout"><MondayBlue /></div></div>
                        <div className="btn-rout-wrapper"><div className="btn-rout"><BellSvg /></div></div>
                        <div className="btn-rout-wrapper"><div className="btn-rout"><InboxSvg /></div></div>
                        <div className="btn-rout-wrapper"><div className="btn-rout"><WorkSvg /></div></div>
                        <div className="btn-rout-wrapper"><div className="btn-rout"><StarSvg /></div></div>

                    </div>
                    <div className="bottom">
                        {/* <div className="search-all-container"></div> */}
                    </div>
                </div>
                <div className="footer">
                    <div className="sep"> </div>
                    <div className="avatar-menu-component-wrapper" >
                        <div className="footer-navigation-items-area">
                            <div className="avatar-menu-component">
                                <div className="avatar-img"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}