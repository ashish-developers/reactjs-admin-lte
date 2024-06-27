import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './Auth'
import ApiService from '../../services/apiServices';


const apiService = new ApiService('http://localhost:10000/api');

// Map state to props
const mapStateToProps = state => ({
  loader: state.loader
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  loaderClick: () => dispatch({ type: 'LOADER' })
});


class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginMessage: '',
      isAuthenticated: false,
      formData: {
        email: 'ashis11h@gmail.com',
        password: '123456'
      },
      errors: {}
    };
  }

  validate = () => {
    const { formData } = this.state;
    let errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange = (e) => {
    let errors = {}
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));

    if (name == 'email' && !this.validateEmail(e.target.value)) errors['email'] = 'Enter a valid email.'
    this.setState({ errors });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      this.props.loaderClick();
      try {
        let outPut = await apiService.post('/auth/user/login', this.state.formData);
        if (outPut) this.setState({ isAuthenticated : true })
      } catch(err) {
        console.log(err)
        this.setState({ loginMessage : err.response.data.msg })
      } 
      
    } else {
      this.setState({ errors });
    }
  }


  
  render() {
    const { formData, errors, isAuthenticated, loginMessage } = this.state;
    if (isAuthenticated) {
      return <Navigate to="/user/dashboard" />;
    }
    return (
      <Auth>
        <div className="card-body">
          <p style={{'textAlign':'center'}} className="error invalid-feedback">{loginMessage}</p>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
              {errors.email && <span className="error invalid-feedback">{errors.email}</span>}
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
              {errors.password && <span className="error invalid-feedback">{errors.password}</span>}
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" />
                  <label>
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-success btn-block">Sign In</button>
              </div>
            </div>
          </form>
          <p className="mb-1">
            <a className="text-center auth-link">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a className="text-center auth-link">Register a new</a>
          </p>
        </div>
      </Auth>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
