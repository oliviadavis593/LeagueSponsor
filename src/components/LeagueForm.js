import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imgs/leaguelogo.png';
import '../styles/LeagueForm.css'


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
                    <form
                    className='ls-leagueform'
                    >
                        <fieldset>
                            <legend>
                                <h2>League Form</h2>
                                <p>
                                    Add a league to our platform so sponsorships can see you!
                                </p>
                            </legend>

                            <label htmlFor='league_name'>League Name:</label>
                            <input 
                            id='league_name'
                            type='text'
                            name='league_name'
                            required
                            />

                            <label htmlFor='Location'>Location:</label>
                            <input 
                            id='location'
                            type='text'
                            name='location'
                            required
                            />

                            <label htmlFor='website'>Website:</label>
                            <input 
                            id='website'
                            type='text'
                            name='website'
                            />

                            <label htmlFor='price'>Price:</label>
                            <input 
                            id='price'
                            type='text'
                            name='price'
                            />
                        </fieldset>
                        <button
                        className='ls-form__button'
                        >
                            Submit
                        </button>
                        </form> 
                </main>
            </div>
        )
    }
}

export default LeagueForm; 