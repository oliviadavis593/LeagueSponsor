import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';
import '../styles/Landing.css';


function Landing() {
    return(
        <div>
            <header>
                <NavLink to='/' className='nav__link'>
                    <img src={Logo} alt='ls-logo' className='ls-logo__header' />
                </NavLink>
            </header>
           <main role='main'>
                <div className='ls-landing__title'>
                    <h1>How It Works...</h1>
                </div>
                <div className='ls-league__info'>
                    <span>
                        <h2>For Leagues:</h2> 
                    </span>
                    <span>
                        <p>1. Add your league to our platform</p>
                        <p>2. Submit your leagues information</p>
                        <p>3. WAIT FOR SPONSORSHIPS! <span role='img' aria-label='smiley'>😀</span></p>
                    </span>
                </div>
                <div className='ls-sponsor__info'>
                    <span>
                        <h2>For Sponsors:</h2>
                    </span>
                    <span>
                        <p>1. Enter your total budget</p>
                        <p>2. Target leagues in a specific location</p>
                        <p>3. SPONSOR AS MANY LEAGUES AS POSSIBLE!  <span role='img' aria-label='smiley'>😀</span></p>
                    </span>
                </div>
                <div className='ls-landing__enter'>
                    <NavLink to='/dashboard'>
                        <button>Enter</button>
                    </NavLink>
                </div>
           </main>
        </div>
    )
}

export default Landing; 