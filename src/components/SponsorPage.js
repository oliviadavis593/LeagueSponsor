import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config';
import Logo from '../imgs/leaguelogo.png';
import '../styles/SponsorPage.css';

class SponsorPage extends Component {
    constructor() {
        super();
        this.state = {
            parameters: {},
            leagues: [],
            error: null,
        }
    }

    hasRequiredParams = parameters => {
        const { latitude, longitude, radius, budget } = this.state.parameters;
        if (latitude && longitude && radius && budget) {
            return true; 
        }
        return false; 
    }

    handleSumbit = event => {
        event.preventDefault();
        const parameters = {};

        Object.values(event.target.elements).forEach(input => {
            if (input.tagNaem === 'INPUT') {
                parameters[input.name] = input.value; 
            }
        });

        this.setState({...this.state, parameters });
    }

    componentDidUpdate(_, prevState) {
        if (this.hasRequiredParams()) {
            if (
                prevState.parameters.latitude !== this.state.parameters.latitude ||
                prevState.parameters.longitude !== this.state.parameters.longitude ||
                prevState.parameters.radius !== this.state.parameters.radius ||
                prevState.parameters.budget !== this.state.parameters.budget
            ) {
                const { latitude, longitude, radius, budget } = this.state.parameters; 
                fetch(`${config.API_ENDPOINT}/api/leagues?latitude=${latitude}&longitude=${longitude}&radius=${radius}&budget=${budget}`)
                    .then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                    .then(leagues => {
                        this.setState({ leagues, error: null })
                    })
                    .catch(error => {
                        this.setState({
                            ...this.state, 
                            error: 'Failed to fetch the leagues'
                        });
                    });
            }
        } 
    }

    render() {
        return(
            <div>
                <NavLink to='/dashboard'>
                    <img src={Logo} alt='ls-logo' className='ls-logo' />
                </NavLink>
                <main>
                    <form
                    className='ls-sponsor__form'
                    onSubmit={this.handleSumbit}
                    >
                        <fieldset>
                            <legend>
                                <h1>Sponsor Search</h1>
                            </legend>
                            <label htmlFor='budget'>Total Budget:</label>
                            <input 
                            id='budget'
                            type='number'
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
                        {this.state.error && <p>{this.state.error}</p>}
                    </form>
                </main>
            </div>
        )
    }
}

export default SponsorPage; 