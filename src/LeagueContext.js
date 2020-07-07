import React from 'react';

const LeagueContext = React.createContext({
    leagues: [],
    addLeague: () => {}
})

export default LeagueContext; 