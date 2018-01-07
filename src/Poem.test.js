import React from 'react';
import { shallow, render } from 'enzyme';
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

it('renders shuffle buttons for each line', () => {
  const wrapper = shallow(<Poem />);
  const label = "Shuffle"
  const button1 = (wrapper.find('Button').at(0));
  const button2 = (wrapper.find('Button').at(2));
  const button3 = (wrapper.find('Button').at(4));
  expect(button1.contains(label)).toEqual(true);
  expect(button2.contains(label)).toEqual(true);
  expect(button3.contains(label)).toEqual(true);
});

it('renders lock buttons for each line', () => {
  const wrapper = shallow(<Poem />);
  const label = "Lock"
  const button1 = (wrapper.find('Button').at(1));
  const button2 = (wrapper.find('Button').at(3));
  const button3 = (wrapper.find('Button').at(5));
  expect(button1.contains(label)).toEqual(true);
  expect(button2.contains(label)).toEqual(true);
  expect(button3.contains(label)).toEqual(true);
});

it('renders a shuffle all button', () => {
  const wrapper = shallow(<Poem />);
  const label = "Shuffle All"
  const button = (wrapper.find('Button').at(6));
  expect(button.contains(label)).toEqual(true);
});
