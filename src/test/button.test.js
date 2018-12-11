import React from 'react';
import ButtonComponent from '../components/button.js';
import renderer from 'react-test-renderer';

test('render button', () => {
  const component = renderer.create(
    <ButtonComponent >Facebook</ButtonComponent>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

test('clicked button', () => {
  const component = renderer.create(
  <ButtonComponent onClick={() => console.log('button')}></ButtonComponent>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
