import React from 'react'

const Header = () => {
  return (
    <header className='p-5 flex item-center'>
      <img className='w-7 h-8' alt = "" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
      <img className='h-8 ml-4' alt = "" src="https://www.freepnglogos.com/uploads/official-youtube-logo-png-18.png"/>
      <input placeholder='Search' className='p-3 border h-10 mx-auto w-1/2 rounded-3xl'  />
      <img className='h-8' alt = "" src = "https://cdn2.iconfinder.com/data/icons/user-solid-style/32/user_people_human-512.png" />
    </header>
  )
}

export default Header