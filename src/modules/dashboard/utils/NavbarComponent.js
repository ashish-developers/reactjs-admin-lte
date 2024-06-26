import React from 'react';
import UserIcon1 from '../../../assets/img/user1-128x128.jpg'
import UserIcon8 from '../../../assets/img/user8-128x128.jpg'
export default class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch : false,
            showChatList : false,
            showNotificationList : false,
            showSidebar : true,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChatlist = this.handleChatlist.bind(this);
        this.handleNotificationList = this.handleNotificationList.bind(this);
        this.handleSidebar = this.handleSidebar.bind(this);
        
    }   

    handleSearch() {
        this.setState({showSearch: !this.state.showSearch})
    }

    handleChatlist() {
        this.setState({showChatList: !this.state.showChatList})
    }

    handleNotificationList() {
        console.log(this.state)
        this.setState({showNotificationList: !this.state.showNotificationList})
    }

    handleSidebar() {
        this.setState({ showSidebar : !this.state.showSidebar})
        this.props.onSubmit(!this.state.showSidebar);
    }

    render() {
        
        const { showSearch, showChatList, showNotificationList } = this.state;
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <a onClick={this.handleSidebar} className="nav-link" style={{cursor:'pointer'}} role="button"><i className="fas fa-bars"></i></a>
                    </li>
                </ul> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a style={{cursor:'pointer'}} onClick={this.handleSearch} className="nav-link">
                            <i className="fas fa-search">{this.state.showSearch}</i>
                        </a>
                        
                        <div className={`navbar-search-block ${showSearch ? ' navbar-search-open' : ''}`}>
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button onClick={this.handleSearch} className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>                        
                    </li>
                    <li className="nav-item dropdown">
                        <a style={{cursor:'pointer'}} onClick={this.handleChatlist} className="nav-link">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${showChatList ? ' show' : ''}`}>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src={UserIcon1} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src={UserIcon8} alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a style={{cursor:'pointer'}} onClick={this.handleNotificationList}  className="nav-link">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        
                        <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${showNotificationList ? ' show' : ''}`}>
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" role="button">
                            <i className="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}