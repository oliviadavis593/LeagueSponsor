import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../views/Landing';
import Dashboard from '../views/Dashboard';
import LeagueForm from '../components/LeagueForm';
import SponsorPage from '../components/SponsorPage';

class AppRouter extends Component {
    render() {
        return(
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
        )
    }
}

export default AppRouter; 