import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a header', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Beat Poems</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
