// this is for the pop up window

import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}    //true to show pop-up, !! is used ot convert it to boolean
        onRequestClose = {props.handleSelectedOption}   // this is used to close the popup on hitting escape key or clicking background
        contentLabel="Selected Option"  // for accessibility 
        closeTimeoutMS={200}            // after clicking close button, it will take 200 to close
        className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button  className="button" onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal;