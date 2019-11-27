import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';

const setup = (props = {}) => {
  const requiredProps = {
    bestScore: 0,
    score: 0,
    ...props,
  };
  return shallow(<Sidebar {...requiredProps} />);
};

describe('Sidebar', () => {
  it('should render without crashing', () => {
    const wrappper = () => setup();
    expect(wrappper).not.toThrow();
  });

  it('should make visible menu_full when clicked at hamburger menu', () => {
    const wrapper = setup();
    expect(wrapper.find('.menu_full.visible')).toHaveLength(0);

    wrapper.find('.btn-menu').simulate('click');
    expect(wrapper.find('.menu_full.visible')).toHaveLength(1);
  });

  it('should hide the menu_full when clicked at root of menu_full (the transparent space)', () => {
    const wrapper = setup();
    expect(wrapper.find('.menu_full.visible')).toHaveLength(0);

    wrapper.find('.btn-menu').simulate('click');
    expect(wrapper.find('.menu_full.visible')).toHaveLength(1);

    wrapper.find('.menu_full').simulate('click');
    expect(wrapper.find('.menu_full.visible')).toHaveLength(0);
  });

  it('should not hide the menu_full when clicked at body of menu_full', () => {
    const wrapper = setup();
    expect(wrapper.find('.menu_full.visible')).toHaveLength(0);

    wrapper.find('.btn-menu').simulate('click');
    expect(wrapper.find('.menu_full.visible')).toHaveLength(1);

    wrapper.find('.menu_full-container').simulate('click', { stopPropagation: () => undefined });
    expect(wrapper.find('.menu_full.visible')).toHaveLength(1);
  });
});
