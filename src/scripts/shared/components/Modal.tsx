import React from 'react';
import CloseButton from './CloseButton.tsx';

const Modal = (props: {
    changeModalState: void,
}): JSX.Element => {

    const { changeModalState } = props;

    return (
        <div className="modal">
            <div className="modal-bg" onClick={changeModalState}></div>

            <div className="modal-window">
                <CloseButton closeModal={changeModalState} />

                <span>Some text here</span>
            </div>

        </div>
    )
};

export default Modal;