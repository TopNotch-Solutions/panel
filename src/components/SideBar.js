import React from 'react'

function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
   <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive': ''}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
             <div className='logo-div'>
                <h2>MTC Evoucher for Business</h2>
            </div>
        </div>
        <span className='close_icon'><i class="fa fa-times icon" aria-hidden="true" onClick={OpenSidebar}></i></span>
    </div>
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-gift icon" aria-hidden="true"></i> Products 
                <ul className='links-sidebar'>
                    <li className='sidebar-list-item'>
                        <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href='#'>
                <i class="fa fa-desktop icon" aria-hidden="true"></i> Dashboard
            </a>
                    </li>
                </ul>
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-th icon" aria-hidden="true"></i> Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-users icon" aria-hidden="true"></i> Customers
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-american-sign-language-interpreting icon" aria-hidden="true"></i> Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-flag icon" aria-hidden="true"></i> Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href='#'>
                <i class="fa fa-cog icon" aria-hidden="true"></i> Settings
            </a>
        </li>
    </ul>
   </aside>
  )
}

export default SideBar