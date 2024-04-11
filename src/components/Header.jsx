import React from 'react'

const Header = () => {
  return (
    <header className=" bg-white d-flex py-2 justify-content-between align-items-center border-bottom border-secondary">
      <div className="input">
      <span className="input-icon">
        <i className="ri-search-line"></i>
      </span>
      <input type="text" className="form-control border-gray rounded" />
      </div>
      <div className="d-flex align-items-center justify-center gap-4">
        <i className="ri-notification-2-line"></i>
        <div>
          <i className="ri-user-line"></i>
        </div>
        <div>
          <h5 className="lh-1 fs-6 mb-0">Walid</h5>
          <p className="lh-1 mb-0">Administrator</p>
        </div>
        <div>
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </header>
  )
}

export default Header