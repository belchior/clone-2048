import React from 'react';
import { Sidebar } from './Sidebar';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

it('should render Sidebar without crashing', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <Sidebar bestScore={0} score={0} />
  );

  expect(tree).toMatchSnapshot();
});

it('should make visible menu_full when clicked at hamburger menu', () => {
  const component = shallow(<Sidebar />);
  expect(component.find('.menu_full.visible')).toHaveLength(0);

  component.find('.btn-menu').simulate('click');
  expect(component.find('.menu_full.visible')).toHaveLength(1);
});

it('should hide the menu_full when clicked at root of menu_full (the transparent space)', () => {
  const component = shallow(<Sidebar />);
  expect(component.find('.menu_full.visible')).toHaveLength(0);

  component.find('.btn-menu').simulate('click');
  expect(component.find('.menu_full.visible')).toHaveLength(1);

  component.find('.menu_full').simulate('click');
  expect(component.find('.menu_full.visible')).toHaveLength(0);
});

it('should not hide the menu_full when clicked at body of menu_full', () => {
  const component = shallow(<Sidebar />);
  expect(component.find('.menu_full.visible')).toHaveLength(0);

  component.find('.btn-menu').simulate('click');
  expect(component.find('.menu_full.visible')).toHaveLength(1);

  component.find('.menu_full-container').simulate('click', { stopPropagation: () => undefined });
  expect(component.find('.menu_full.visible')).toHaveLength(1);
});
