import React, { createRef} from 'react'
import ModalComponent from './ModalComponent';
export default class UploadComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showUploader: false,
            showModal: false
        }
        this.buttonRef = createRef();
        this.dropdownRef = createRef();
        this.fileInputRef = createRef();
        this.modalRef = createRef();

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.showUploader = this.showUploader.bind(this);
        this.handleUploadClick = this.handleUploadClick.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    showUploader = () => {
        this.setState({ showUploader: !this.state.showUploader });
    }

    handleClickOutside = (event) => {
        if (
            this.dropdownRef.current &&
            !this.dropdownRef.current.contains(event.target) &&
            !this.buttonRef.current.contains(event.target)
        ) {
          this.setState({ showUploader: false });
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleClickOutside);
    }
    
    componentWillUnmount = () => {
        document.addEventListener('click', this.handleClickOutside);
    }

    handleUploadClick = () => {
        this.fileInputRef.current.click();
    }
    
    handleFileChange = async (event) => {
        event.preventDefault();
        // let { file } = this.state;
        // let CHUNK_SIZE = 1024 * 1024; // 1MB chunk size
    
        // for (let start = 0; start < file.size; start += CHUNK_SIZE) {
        //   let chunk = file.slice(start, start + CHUNK_SIZE);
        //   let formData = new FormData();
        //   formData.append('file', chunk, file.name);
        //   try {
        //     await axios.post('http://localhost:10000/api/user/files/upload', formData, {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     });
        //     console.log(`Uploaded chunk starting at ${start}`);
        //   } catch (error) {
        //     console.error('Error uploading chunk:', error);
        //     break;
        //   }
        // }
    }

    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
            showUploader: !this.state.showUploader
        })
    }

    handleModalClose = (message) => {
        this.setState({ showModal : false })
    }

    handleModalSubmit = (message) => {
        this.setState({ showModal : false });
    }

    render() {

        const { showUploader, showModal } = this.state;

        return (
        <div className="card-tools">
            <button ref={this.buttonRef}  onClick={this.showUploader} type="button"  style={{'backgroundColor': '#fff',color: '#212529', 'fontWeight': 'bolder'}} className="btn btn-default btn-block" fdprocessedid="1hrfko"> New  &nbsp;&nbsp;&nbsp;    
                <i className="fa fa-plus-square" style={{color: '#212529'}}></i>
            </button>
            <div ref={this.dropdownRef} className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${showUploader ? ' show' : ''}`}>
                <a href="#" onClick={this.handleModal} className="dropdown-item"><i className="fas fa-folder-plus upload-menu mr-2"></i> New Folder {showModal}</a>
                <div className="dropdown-divider"></div>
                <a href="#" onClick={this.handleUploadClick} className="dropdown-item"><i className="fas fa-file-upload upload-menu mr-2"></i> File Upload </a>
                <div className="dropdown-divider"></div>
                <a href="#" onClick={this.handleUploadClick} className="dropdown-item"><i className="fas fa-cloud-upload-alt upload-menu mr-2"></i> Folder Upload </a>
            </div>
            <input
                type="file"
                ref={this.fileInputRef}
                style={{ display: 'none' }}
                onChange={this.handleFileChange}
            />
            {showModal ? (
                <ModalComponent onModalClose={this.handleModalClose} onModalSubmit={this.handleModalSubmit} ref={this.modalRef}/>
            ) : (
                ''
            )}
        </div>
        )
    }

}