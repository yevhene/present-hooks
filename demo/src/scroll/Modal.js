import React from 'react'

import './Modal.css'
import useLockBodyScroll from './useLockBodyScroll'

const Modal = ({ title, content, onClose }) => {
  useLockBodyScroll()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Modal
