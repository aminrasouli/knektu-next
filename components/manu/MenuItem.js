import * as React from 'react'

const MenuItem = (props) => {
  return (
    <li className="nav-item">
      <a className={'nav-link ' + (props.active && 'active')}
         aria-current="page" href="#">
        <img className="svg-icon" src={`/assets/svg/${props.iconName}.svg`}
             alt="Notification"/>
        {props.children}
      </a>
    </li>
  )
}

export default MenuItem