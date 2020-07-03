import React, { Component } from 'react';
import LeagueItem from '../components/LeagueItem';
import STORE from '../components/store';

class LeagueList extends Component {
    render() {
        return(
            <section className='ls-league-list__container'>
                <ul className='ls-league_list'>
                    {STORE.leagues.map(league => (
                        <li key={league.id}>
                            <LeagueItem 
                            id={league.id}
                            league_name={league.league_name}
                            website={league.website}
                            location={league.location}
                            price={league.price}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default LeagueList; 