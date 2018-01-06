import React from 'react';
import { shallow } from 'enzyme';
import Poem from './Poem';

it('renders without crashing', () => {
  shallow(<Poem />);
});

it('renders a header', () => {
  const wrapper = shallow(<Poem label="test"/>);
  const label = <p>test</p>;
  expect(wrapper.contains(label)).toEqual(true);
});
