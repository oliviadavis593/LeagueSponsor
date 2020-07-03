import React, { Component } from 'react';


class LeagueItem extends Component {
    render() {
        const { league_name, website, price, location } = this.props; 
        return(
            <div className='ls-league'>
                <h2 className='ls-league__name'>
                    <a href={website} target='blank'>{league_name}</a>
                </h2>
                <div className='ls-league__location'>
                    {location}
                </div>
                <div className='ls-league__price'>
                    {price}
                </div>
            </div>
        )
    }
}

export default LeagueItem; 