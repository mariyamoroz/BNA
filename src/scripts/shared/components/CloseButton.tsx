import React from 'react';
import PlusIcon from '../../../icons/PlusIcon.tsx';

const CloseButton = (props: {
    closeModal: void,
}): JSX.Element => {

    return (
        <button className="close-button" onClick={props.closeModal}>
            <PlusIcon />
        </button>
    )
};

export default CloseButton;