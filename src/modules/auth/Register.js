import React, { Component } from 'react';
import axios from 'axios';
import ApiService from '../../services/apiServices';
import socketService from '../../services/socketServices';
import ReactPlayer from 'react-player';
const apiService = new ApiService('http://localhost:10000/api');

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploadProgress: 0,

      playing: false,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleSeekChange = this.handleSeekChange.bind(this);
    this.handleSeekMouseUp = this.handleSeekMouseUp.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handlePlaybackRateChange = this.handlePlaybackRateChange.bind(this);
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




  handlePlayPause() {
    this.setState({ playing: !this.state.playing });
  }

  handleVolumeChange(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  handleSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleSeekMouseUp(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleProgress(state) {
    this.setState({ played: state.played, loaded: state.loaded });
  }

  handleDuration(duration) {
    this.setState({ duration });
  }

  handlePlaybackRateChange(e) {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  }

  render() {
    const { playing, volume, played, loaded, duration, playbackRate, loop } = this.state;
    return (
      <div className="App">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="http://localhost:10000/api/video"
          playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          loop={loop}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
        />
      </div>
      <div className="controls">
        <button onClick={this.handlePlayPause}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={this.handleVolumeChange}
        />
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        />
        <input
          type="number"
          min={0.5}
          max={2}
          step="0.1"
          value={playbackRate}
          onChange={this.handlePlaybackRateChange}
        />
        <label>
          <input
            type="checkbox"
            checked={loop}
            onChange={() => this.setState({ loop: !loop })}
          />
          Loop
        </label>
      </div>
      <div>
        <progress max={1} value={loaded} />
        <progress max={1} value={played} />
      </div>
      <div>
        <p>Duration: {duration.toFixed(2)} seconds</p>
      </div>
    </div>
      // <video controls width="600">
      //     <source src="http://localhost:10000/api/video" type="video/mp4" />
      // </video>
      // <form onSubmit={this.handleSubmit}>
      //   <input type="file" onChange={this.handleFileChange} />
      //   <button type="submit">Upload</button>
      // </form>
    );
  }
}

export default RegisterComponent;
