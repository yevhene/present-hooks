// CODE FROM: https://usehooks.com/useLockBodyScroll/
import React, { useState } from 'react'

import './Scroll.css'
import Modal from './Modal'

const Scroll = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      <div className="scroll-content"></div>
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't!"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

export default Scroll
