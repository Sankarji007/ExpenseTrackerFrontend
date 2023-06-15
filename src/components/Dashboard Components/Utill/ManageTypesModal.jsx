import React from "react";

const ManageTypesModal = ({ showModal, onCloseModal }) => {
    return (
        showModal && (
            <div className="modal show" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Manage Types</h5>
                            <button type="button" className="close" onClick={onCloseModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Place your edit/delete type content here */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCloseModal}>
                                Close
                            </button>
                            {/* Add additional buttons for save, delete, etc. */}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};
export default ManageTypesModal;