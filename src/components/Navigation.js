import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';

function Navigation() {
    return(
        <div className='ls-navigation'>
            <div className='ls-logo'>
                <NavLink to='/'>
                    <img src={Logo} alt='ls-logo' className='ls-logo' />
                </NavLink>
            </div>
            <nav className='nav'>
                <NavLink to='/leagueform' className='ls-league__form'>Add League</NavLink>
                <NavLink to='/sponsor' className='ls-sponsor'>Sponsor</NavLink>
            </nav>
        </div>
    )
}

export default Navigation; 