import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SponsorPage from '../components/SponsorPage';

describe('SponsorPage Component', () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SponsorPage /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter><SponsorPage /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})