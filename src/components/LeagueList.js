import React, { Component } from 'react';
import LeagueItem from '../components/LeagueItem';
import LeagueContext from '../LeagueContext';
import '../styles/LeagueList.css';

class LeagueList extends Component {

    static contextType = LeagueContext; 

    render() {
        const leagues = this.context.leagues; 
        return(
            <div>
                <div className='ls-dashboard__title'>
                    <h1>All Leagues</h1>
                </div>
                <section className='ls-league-list__container'>
                <ul className='ls-league_list'>
                    {leagues.map(league => (
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
            </section>
            </div>
        )
    }
}

export default LeagueList; 