import React from 'react';
import ListAutoComplete from '../components/listAutoComplete.js';
import renderer from 'react-test-renderer';

test('Render ListAutoComplete', () => {
  const list = [
    {normalized_job_title:'test',uuid:'123'},
    {normalized_job_title:'test2',uuid:'1234'}
  ]
  const component = renderer.create(
    <ListAutoComplete list={list}></ListAutoComplete>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('clicked element of list', () => {
    const list = [
        {normalized_job_title:'test',uuid:'123'},
        {normalized_job_title:'test2',uuid:'1234'}
      ]
    const component = renderer.create(
    <ListAutoComplete list={list} clicked={() => console.log(1)}></ListAutoComplete>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.children[0].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
});
