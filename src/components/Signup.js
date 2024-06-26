import React from 'react';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, this is Signup!'
    };
  }

  handleClick = () => {
    console.log(`Function calling...`)
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}> Click Event</button>
      </div>
    );
  }
}

export default SignupComponent;
