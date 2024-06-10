import React from 'react'

export const Header = ({OpenSidebar}) => {
  return (
   <header className='header'>
        <div className='menu-icon'>
            <i class="fa fa-bars icon" aria-hidden="true" onClick={OpenSidebar}></i>
        </div>
        <div className='header-left'>
            <i class="fa fa-search icon" aria-hidden="true" ></i>
        </div>
        <div className='header-right'>
        <i class="fa fa-bell icon" aria-hidden="true" ></i>
        <i class="fa fa-envelope icon" aria-hidden="true" ></i>
        <i class="fa fa-user-circle icon" aria-hidden="true" ></i>
        </div>
   </header>
  )
}
