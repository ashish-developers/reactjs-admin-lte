import React from 'react'
import SidebarComponent from './utils/SidebarComponent';
import NavbarComponent from './utils/NavbarComponent';
import FooterComponent from './utils/FooterComponent';
import UploadComponent from './utils/UploadComponent';
import Avatar from "../../assets/img/avatar.png"
export default class DashboardComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showSidebar : true,
            isVisible: false,
            top: 0,
            left: 0
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        //document.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('click', this.handleClick);
    }
    
    componentWillUnmount() {
        //document.removeEventListener('contextmenu', this.handleContextMenu);
        document.removeEventListener('click', this.handleClick);
    }

    handleClick = (event) => {
        this.setState({ isVisible: false });
    }

    handleContextMenu = (event) => {
        event.preventDefault();
        this.setState({
          isVisible: true,
          top: event.clientY,
          left: event.clientX
        });
    };

    handleFormSubmit(value=true) {
        this.setState({ showSidebar: value });
    }

    render() {
        const { showSidebar, isVisible, top, left } = this.state;
        return (
            <div className="wrapper">
                <NavbarComponent onSubmit={this.handleFormSubmit} />
                <SidebarComponent showSidebar={showSidebar}/>

                <div className="content-wrapper">
                    {isVisible && (
                    <div ref={(ref) => (this.contextMenu = ref)} className="context-menu" style={{ top, left }}>
                        <ul>
                            <li onClick={this.handleClick}>Action 1</li>
                            <li onClick={this.handleClick}>Action 2</li>
                            <li onClick={this.handleClick}>Action 3</li>
                        </ul>
                    </div>
                    )}
                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-tools">
                                <UploadComponent />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped projects">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{width:"1%"}}>#</th>
                                            <th className="text-center">Project Name</th>
                                            <th className="text-center">Version</th>
                                            <th className="text-center">Team Members</th>
                                            <th className="text-center">Comment & Review</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onContextMenu={this.handleContextMenu} style={{cursor:'pointer'}}>
                                            <td>
                                                <a style={{border:'none',backGroundColor:'none'}} className="btn btn-default btn-sm">
                                                    <i className="fas fa-video"></i>
                                                </a>
                                            </td>
                                            <td className="text-center">
                                                <a>AdminLTE v3</a>
                                                <br/>
                                                <small>Created 01.01.2019</small>
                                            </td>
                                            <td className="text-center"><small>1</small></td>
                                            <td className=" text-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img alt="Avatar" className="table-avatar" src={Avatar}/>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <img alt="Avatar" className="table-avatar" src={Avatar}/>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td className="project_progress text-center">
                                                <a style={{border:'none',backGroundColor:'none'}} className="btn btn-default btn-sm">
                                                    <i className="fas fa-comments"></i>
                                                </a>
                                                <a style={{border:'none',backGroundColor:'none'}} className="btn btn-default btn-sm">
                                                    <i className="fas fa-check-circle"></i>
                                                </a>
                                            </td>
                                            <td className="project-state text-center">
                                                <span className="badge badge-success">Success</span>
                                            </td>
                                            <td className="project-actions text-right text-center" >
                                                <a className="btn btn-default btn-sm" href="#">
                                                    <i className="fas fa-info-circle"></i>
                                                </a>
                                                <a className="btn btn-default btn-sm" href="#">
                                                    <i className="fas fa-upload"></i>
                                                </a>
                                                <a className="btn btn-default btn-sm" href="#">
                                                    <i className="fas fa-download"></i>
                                                </a>
                                                <a className="btn btn-default btn-sm" href="#">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                                <a className="btn btn-default btn-sm" href="#">
                                                    <i className="fas fa-share-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <FooterComponent />
            </div>
        )
    }

}