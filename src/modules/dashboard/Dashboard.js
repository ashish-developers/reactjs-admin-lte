import React from 'react'
import SidebarComponent from './utils/SidebarComponent';
import NavbarComponent from './utils/NavbarComponent';
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
                    {/* <div className="content-header" >
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v1</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {isVisible && (
                    <div ref={(ref) => (this.contextMenu = ref)} className="context-menu" style={{ top, left }}>
                        <ul>
                            <li onClick={this.handleClick}>Action 1</li>
                            <li onClick={this.handleClick}>Action 2</li>
                            <li onClick={this.handleClick}>Action 3</li>
                        </ul>
                    </div>
                    )}
                    {/* <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div class="info-box" onContextMenu={this.handleContextMenu} style={{cursor:'pointer', backgroundColor: '#343a40', color:'#fff'}}>
                                    <span class="info-box-icon bg-info elevation-1" style={{border: '2px dotted #f47216'}}><i class="fas fa-folder"></i></span>
                                    <div class="info-box-content">
                                        <span class="info-box-text">Clavis Technology</span>
                                        <span class="info-box-number">
                                        10 Files
                                        
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section class="content">
                        <div class="card">
                            <div class="card-header">
                                {/* <h3 class="card-title">Projects</h3> */}
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i class="fas fa-share-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <table class="table table-striped projects">
                                    <thead>
                                        <tr>
                                            <th class="text-center" style={{width:"1%"}}>#</th>
                                            <th class="text-center">Project Name</th>
                                            <th class="text-center">Version</th>
                                            <th class="text-center">Team Members</th>
                                            <th class="text-center">Comment & Review</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onContextMenu={this.handleContextMenu} style={{cursor:'pointer'}}>
                                            <td>
                                                <a style={{border:'none',backGroundColor:'none'}} class="btn btn-default btn-sm">
                                                    <i class="fas fa-video"></i>
                                                </a>
                                            </td>
                                            <td class="text-center">
                                                <a>AdminLTE v3</a>
                                                <br/>
                                                <small>Created 01.01.2019</small>
                                            </td>
                                            <td class="text-center"><small>1</small></td>
                                            <td class=" text-center">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <img alt="Avatar" class="table-avatar" src={Avatar}/>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <img alt="Avatar" class="table-avatar" src={Avatar}/>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td class="project_progress text-center">
                                                <a style={{border:'none',backGroundColor:'none'}} class="btn btn-default btn-sm">
                                                    <i class="fas fa-comments"></i>
                                                </a>
                                                <a style={{border:'none',backGroundColor:'none'}} class="btn btn-default btn-sm">
                                                    <i class="fas fa-check-circle"></i>
                                                </a>
                                            </td>
                                            <td class="project-state text-center">
                                                <span class="badge badge-success">Success</span>
                                            </td>
                                            <td class="project-actions text-right text-center" >
                                                <a class="btn btn-default btn-sm" href="#">
                                                    <i class="fas fa-info-circle"></i>
                                                </a>
                                                <a class="btn btn-default btn-sm" href="#">
                                                    <i class="fas fa-upload"></i>
                                                </a>
                                                <a class="btn btn-default btn-sm" href="#">
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a class="btn btn-default btn-sm" href="#">
                                                    <i class="fas fa-eye"></i>
                                                </a>
                                                <a class="btn btn-default btn-sm" href="#">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="main-footer">
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>
            </div>
        )
    }

}