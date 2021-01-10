import * as React from 'react'
import { useEffect, useState } from 'react'
import MenuItem from '../Menu/MenuItem'

const Sidebar = () => {
  const [menu, setMenu] = useState({})
  useEffect(() => {
    fetch('/api/menu').then(res => res.json()).then(
      (result) => {
        setMenu(result.menus)
      },
      (error) => {
        console.log(error)
      },
    )
  }, [])
  return (
    <>
      <nav id="sidebarMenu"
           className="col-md-3 col-lg-2 d-md-block sidebar collapse">
        <div className="position-sticky pt-5">
          <ul className="nav sidebar-nav flex-column">
            {menu && menu.length > 0 && menu.map(item => (
                <MenuItem key={item.id} iconName={item.icon}
                          active={item.isActive}>
                  {item.name}
                </MenuItem>
              ),
            )}

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
}

export default Sidebar