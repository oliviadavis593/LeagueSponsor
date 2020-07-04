import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';
import '../styles/SponsorPage.css';

class SponsorPage extends Component {
    render() {
        return(
            <div>
                <NavLink to='/dashboard'>
                    <img src={Logo} alt='ls-logo' className='ls-logo' />
                </NavLink>
                <main>
                    <form
                    className='ls-sponsor__form'
                    >
                        <fieldset>
                            <legend>
                                <h1>Sponsor Search</h1>
                            </legend>
                            <label htmlFor='budget'>Total Budget:</label>
                            <input 
                            id='budget'
                            type='text'
                            name='budget'
                            />

                            <label htmlFor='location'>Location:</label>
                            <input 
                            id='location'
                            type='text'
                            name='location'
                            />

                            <label htmlFor='radius'>Radius:</label>
                            <select name='radius' id='rating'>
                                <option value='Any'>Any</option>
                                <option value='5'>5mi</option>
                                <option value='15'>15mi</option>
                                <option value='50'>50mi</option>
                                <option value='100'>100mi</option>
                                <option value='1000'>1000mi</option>
                            </select>
                        </fieldset>
                        <div className='sponsor__button'>
                            <button
                            className='btn'
                            >
                                Find
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}

export default SponsorPage; 