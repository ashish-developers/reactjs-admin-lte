import React from 'react';


export default class ModalComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isClosed : false,
          isSubmitted : false
        }
    }
    
    handleClose = () => {
        this.props.onModalClose('close')
    };

    handleSubmit = () => {
        this.props.onModalSubmit('Submitted');
    };

    render() {
        return (
            <div className="modal fade show" style={{display:'block'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title"> Create Folder </h4>
                </div>
                <div className="modal-body">
                  <input type='text' className='form-control' placeholder='Enter Folder Name' />
                </div>
                <div className="modal-footer justify-content-between">
                  <button type="button" onClick={this.handleClose} className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" onClick={this.handleSubmit} className="btn btn-primary save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}