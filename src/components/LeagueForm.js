import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';


class LeagueForm extends Component {
    render() {
        return(
            <div>
                <div>
                    <NavLink to='/dashboard'>
                        <img src={Logo} alt='ls-logo' className='ls-logo' />
                    </NavLink>
                </div>
                <main>
                    <form>

                    </form>
                </main>
            </div>
        )
    }
}

export default LeagueForm; 