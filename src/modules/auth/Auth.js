import React from 'react';
import { connect } from 'react-redux';
// Map state to props
const mapStateToProps = state => ({
  loader: state.loader
});

class AuthComponent extends React.Component {


  render() {
    const { loader } = this.props;
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <h1 className='auth-layout-h1'><b>Admin</b>LTE - {loader}</h1>
            </div>
            {loader ? (
            <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i></div>
            )
            : ''}
            {this.props.children}
          </div>
        </div>
      </div>


    );
  }
}

export default connect(mapStateToProps)(AuthComponent);
