import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Navigation /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer 
            .create(<BrowserRouter><Navigation /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})