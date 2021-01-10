import * as React from 'react'

const Sidebar = () => {
  return (
    <>
      <nav id="sidebarMenu"
           className="col-md-3 col-lg-2 d-md-block sidebar collapse">
        <div className="position-sticky pt-5">
          <ul className="nav sidebar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img className="svg-icon" src="/assets/svg/home-alt.svg"
                     alt="Notification"/>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="svg-icon"
                     src="/assets/svg/comment-alt-lines.svg"
                     alt="Notification"/>
                Lessons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="svg-icon" src="/assets/svg/file-search.svg"
                     alt="Notification"/>
                Wallet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="svg-icon" src="/assets/svg/lock-alt.svg"
                     alt="Notification"/>
                Security
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img className="svg-icon"
                     src="/assets/svg/comment-alt-lines.svg"
                     alt="Notification"/>
                About Knektu
              </a>
            </li>
            <li className="nav-item mt-5">
              <a className="nav-link" href="#">
                <img className="svg-icon" src="/assets/svg/sign-out-alt.svg"
                     alt="Notification"/>
                Logout
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
};

export default Sidebar;