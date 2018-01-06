import React from 'react';
import { shallow } from 'enzyme';
import Poem from './Poem';
import { Button, ButtonGroup } from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons'
import { TiArrowShuffle, TiRefresh, TiLockClosedOutline } from 'react-icons/lib/ti'

it('renders without crashing', () => {
  shallow(<Poem />);
});

it('renders a header passed as a prop', () => {
  const wrapper = shallow(<Poem label="test"/>);
  const label = <p>test</p>;
  expect(wrapper.contains(label)).toEqual(true);
});

it('renders the first line of a poem', () => {
  const wrapper = shallow(<Poem label="test"/>);
  expect(wrapper.find('h2').at(0).length).not.toBe(0);
});

it('renders the second line of a poem', () => {
  const wrapper = shallow(<Poem label="test"/>);
  expect(wrapper.find('h2').at(1).length).not.toBe(0);
});

it('renders the third line of a poem', () => {
  const wrapper = shallow(<Poem label="test"/>);
  expect(wrapper.find('h2').at(2).length).not.toBe(0);
});
