import React, { Component } from 'react';
import axios from 'axios';
import ApiService from '../../services/apiServices';
import socketService from '../../services/socketServices';

const apiService = new ApiService('http://localhost:10000/api');

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploadProgress: 0,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleMessage(message) {
    console.log(message)
    return message;
  };
  async componentDidMount() {
    socketService.sendMessage({ status : 'From Client'})
    socketService.subscribeToMessages(this.handleMessage); 
    this.fetch();
  }

  async fetch() {
    try {
    const data = await apiService.get('/user/files/process');
    } catch (error) {
      console.log(error)
    }
  }

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { file } = this.state;
    let CHUNK_SIZE = 1024 * 1024; // 1MB chunk size

    for (let start = 0; start < file.size; start += CHUNK_SIZE) {
      let chunk = file.slice(start, start + CHUNK_SIZE);
      let formData = new FormData();
      formData.append('file', chunk, file.name);

      try {
        await axios.post('http://localhost:10000/api/user/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(`Uploaded chunk starting at ${start}`);
      } catch (error) {
        console.error('Error uploading chunk:', error);
        break;
      }
    }
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default RegisterComponent;
