import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import BellIcon from '@material-ui/icons/Notifications'


const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>
                <div className='header__image'>
                    <img src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png' alt='' />
                </div>
            </Link>

            <div className='header__nav__leftSide'>
                <Link to='/' className='header__nav__leftSide__link'>
                    <p>Home</p>
                </Link>
                <p>TV Shows</p>
                <p>Movies</p>
                <p>Latest</p>
                <Link to='/watchlist' className='header__nav__leftSide__link'>
                    <p>My List</p>
                </Link>
            </div>

            <div className='header__nav__rightSide'>
                <SearchIcon className='header__nav__search' />
                <BellIcon className='header__nav__bell' />
                <span>
                    <img className='header__nav__avatar'
                        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                        alt=''
                    />
                </span>
            </div>
        </nav>
    )
}

export default Header