import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LeagueContext from '../LeagueContext';
import Landing from '../views/Landing';
import Dashboard from '../views/Dashboard';
import LeagueForm from '../components/LeagueForm';
import SponsorPage from '../components/SponsorPage';
import config from '../config';

class AppRouter extends Component {
    state = {
        leagues: [],
        error: null, 
    }

    static contextType = LeagueContext; 

    //GET
    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/leagues`, {
            method: 'GET',
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
        .then(leagues => {
            this.setState({ leagues })
        })
        .catch(error => {
            console.error({ error })
        })
    }

    handleAddLeague = league => {
        this.setState({ 
            leagues: [...this.state.leagues, league],
        })
    }
    render() {
        const contextValue = {
            leagues: this.state.leagues, 
            addLeague: this.handleAddLeague, 
        }
        return(
           <LeagueContext.Provider value={contextValue}>
               <div className='App'>
                <div className='app__views'>
                <Route exact path='/' component={Landing} />
            </div>

            <main>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/leagueform' component={LeagueForm} />
                    <Route path='/sponsor' component={SponsorPage} />
                </Switch>
            </main>
           </div>
           </LeagueContext.Provider>
        )
    }
}

export default AppRouter; 