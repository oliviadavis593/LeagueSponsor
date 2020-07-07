import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import LeagueForm from '../components/LeagueForm';

describe('LeagueForm Component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><LeagueForm /></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrowserRouter><LeagueForm /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})