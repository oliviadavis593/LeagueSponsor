import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import LeagueItem from '../components/LeagueItem';

describe('LeagueItem Component', () => {
   it(`renders without crashing`, () => {
       const div = document.createElement('div')
       ReactDOM.render(<BrowserRouter><LeagueItem /></BrowserRouter>, div)
       ReactDOM.unmountComponentAtNode(div)
   })

   it('renders the UI as expected', () => {
       const tree = renderer
            .create(<BrowserRouter><LeagueItem /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
   })
})