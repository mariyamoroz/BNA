import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PlusIcon from '../../../icons/PlusIcon.tsx';
import Modal from './Modal.tsx';

const PlusButton = (): JSX.Element => {
    const [modalVisible, setModalVisible ] = useState<boolean>(false);

    const changeModalState = (): void => {
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <button className="plus-button" onClick={changeModalState}>
                <PlusIcon />
            </button>

            <CSSTransition
                in={modalVisible}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <Modal changeModalState={changeModalState} />
            </CSSTransition>
        </>
    )
};

export default PlusButton;