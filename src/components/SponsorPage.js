import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config';
import LeagueItem from '../components/LeagueItem';
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

    newSearch = () => {
        this.setState({ ...this.state, leagues: [] });
    };

    handleSumbit = event => {
        event.preventDefault();
        const parameters = { radius: 5 };

        Object.values(event.target.elements).forEach(input => {
            if (input.tagName === 'INPUT') {
                parameters[input.name] = input.value; 
            }
        });

        this.setState({ ...this.state, parameters });
    }


    componentDidUpdate(prevProps,prevState) {
        if (this.hasRequiredParams()) {
            console.log("prevState", prevState)
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
        } else {
            if (
                this.state.error === null || prevState.error !== 'Insufficient paramters provided'
            ) {
                this.setState({
                    ...this.state,
                    error: 'Insufficient paramters provided'
                })
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
                    {this.state.leagues.length > 0 ? (
                        <div>
                            <button onClick={this.newSearch} className='ls-new-search'>New Search</button>
                            <h2>You should sponsor all of these leagues!</h2>
                            <ul className='ls-league_list'>
                                {this.state.leagues.map(league => (
                                    <li key={league.id}>
                                        <LeagueItem 
                                        id={league.id}
                                        league_name={league.league_name}
                                        website={league.website}
                                        location={league.location}
                                        price={league.price}
                                        latitude={league.latitude}
                                        longitude={league.longitude}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ): (
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
                            placeholder='1750'
                            />

                            <label htmlFor='latitude'>Latitude:</label>
                            <input 
                            id='latitude'
                            type='number'
                            name='latitude'
                            placeholder='17'
                            />

                            <label htmlFor='longitude'>Longitude:</label>
                            <input 
                            id='longitude'
                            type='number'
                            name='longitude'
                            placeholder='20'
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
                    )}
                </main>
            </div>
        )
    }
}

export default SponsorPage; 