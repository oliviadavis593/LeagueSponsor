import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LeagueContext from '../LeagueContext';
import Logo from '../imgs/leaguelogo.png';
import '../styles/LeagueForm.css'


class LeagueForm extends Component {

    state = {
        error: null, 
    }

    static contextType = LeagueContext; 

    //POST
    handleAddLeague(event) {
        event.preventDefault();
        //get the value of each input 
        const { league_name, website, location, price } = event.target; 
        const newLeague = {
            league_name: league_name.value, 
            website: website.value, 
            location: location.value, 
            price: price.value, 
        }
        this.setState({ error: null })
        fetch(``, {
            method: 'POST',
            body:  JSON.stringify(newLeague),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => {
            league_name.value = ''
            website.value = ''
            location.value = ''
            price.value = ''
            this.context.addLeague(data)
            this.props.history('/dashboard')
        })
        .catch(error => {
            this.setState({ error })
        })
    }

    handleChange = event => {
        this.setState({
            league: {
                ...this.state.league, 
                [event.target.league_name]: event.target.value
            }
        })
    }

    
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
                    onSubmit={e => {
                        this.handleAddLeague(e)
                    }}
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
                            onChange={this.handleChange}
                            />

                            <label htmlFor='latitude'>Latitude:</label>
                            <input 
                            id='latitude'
                            type='text'
                            name='location'
                            required
                            onChange={this.handleChange}
                            />

                            <label htmlFor='longitude'>Longitude:</label>
                            <input 
                            id='longitude'
                            type='number'
                            name='longitude'
                            required
                            onChange={this.handleChange}
                            />

                            <label htmlFor='website'>Website:</label>
                            <input 
                            id='website'
                            type='text'
                            name='website'
                            onChange={this.handleChange}
                            />

                            <label htmlFor='price'>Price:</label>
                            <input 
                            id='price'
                            type='number'
                            name='price'
                            required
                            onChange={this.handleChange}
                            />
                        </fieldset>
                        <button
                        className='ls-form__button'
                        type='submit'
                        >
                            Add League
                        </button>
                        </form> 
                </main>
            </div>
        )
    }
}

export default LeagueForm; 