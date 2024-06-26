import React from 'react';
import Auth from './Auth'
import ApiService from '../../services/apiServices';
const apiService = new ApiService('http://localhost:10000/api');

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, this is LoginComponent!',
      formData: {
        email: '',
        password: ''
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
  };

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
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      await apiService.post('/auth/user/login', this.state.formData);
      console.log('Form data:', this.state.formData);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { formData, errors } = this.state;
    return (
      <Auth>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
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
              {errors.password && <span  className="error invalid-feedback">{errors.password}</span>}
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox"/>
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
          {/* <div className="social-auth-links text-center mt-2 mb-3">
            <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div> */}
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

export default LoginComponent;
