import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import BellIcon from '@material-ui/icons/Notifications'
import PersonIcon from '@material-ui/icons/Person'


const Header = () => {
    return (
        <div className='header'>
            <div className='header__image'>
                <img src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png' alt='' />
            </div>

            <div className='header__nav__leftSide'>
                <p>Home</p>
                <p>TV Shows</p>
                <p>Movies</p>
                <p>Latest</p>
                <p>My List</p>
            </div>

            <div className='header__nav__rightSide'>
                <SearchIcon className='header__nav__search' />
                <BellIcon className='header__nav__bell' />
                <PersonIcon className='header__nav__profile' />
            </div>
        </div>
    )
}

export default Header