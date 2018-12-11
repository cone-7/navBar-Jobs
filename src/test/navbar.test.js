import React from 'react';
import NavBar from '../components/navbar.js';
import renderer from 'react-test-renderer';

test('render navbar', () => {
  const component = renderer.create(
    <NavBar searchText="test"></NavBar>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
