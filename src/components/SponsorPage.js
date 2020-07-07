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

                            <label htmlFor='latitude'>Latitude:</label>
                            <input 
                            id='latitude'
                            type='number'
                            name='latitude'
                            />

                            <label htmlFor='longitude'>Longitude:</label>
                            <input 
                            id='longitude'
                            type='number'
                            name='longitude'
                            />

                            <label htmlFor='radius'>Radius:</label>
                            <select name='radius' id='radius'>
                                <option value='Any'>Any</option>
                                <option value='5'>5mi</option>
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