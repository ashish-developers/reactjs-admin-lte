import React from 'react';
import Logo from '../../../assets/img/AdminLTELogo.png'
import UserIcon from '../../../assets/img/user2-160x160.jpg'
export default class SidebarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside id={`${this.props.showSidebar}`} className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link">
                        <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-overflow-x">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="info">
                                <a href="#" className="d-block">Hello, <b>Alexander Pierce</b></a>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </aside>
        )
    }
}