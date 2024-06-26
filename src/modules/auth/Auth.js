import React from 'react';
import { Link, Outlet } from 'react-router-dom';


class AuthComponent extends React.Component {


  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <h1 className='auth-layout-h1'><b>Admin</b>LTE</h1>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>


    );
  }
}

export default AuthComponent;
