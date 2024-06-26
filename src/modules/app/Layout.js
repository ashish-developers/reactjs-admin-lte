import React from 'react';
import Logo from '../../assets/img/AdminLTELogo.png'
class LayoutComponent extends React.Component {

  render() {
    return (
        <div class="layout-top-nav">
            <div class="wrapper">
                <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                    <div class="container">
                        <a href="../../index3.html" class="navbar-brand">
                        <img src={Logo} alt={"Logo"} class="brand-image img-circle elevation-3" />
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                        </a>
                        <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="index3.html" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Contact</a>
                                </li>
                            </ul>
                            <form class="form-inline ml-0 ml-md-3">
                                <div class="input-group input-group-sm">
                                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div>

            
                    </div>
                </nav>
                {this.props.children}
                <footer class="main-footer">
                    <div class="float-right d-none d-sm-inline">
                        Anything you want
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
            </div>
        </div>
    );
  }
}

export default LayoutComponent;
