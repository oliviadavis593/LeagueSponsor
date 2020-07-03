import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';

class SponsorPage extends Component {
    render() {
        return(
            <div>
                <NavLink>
                    <img src={Logo} alt='ls-logo' className='ls-logo' />
                </NavLink>
            </div>
        )
    }
}

export default SponsorPage; 