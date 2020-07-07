import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import LeagueList from '../components/LeagueList';

describe('LeagueList Component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><LeagueList /></BrowserRouter>,div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrowserRouter><LeagueList /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})