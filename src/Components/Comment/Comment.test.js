import React from 'react';
import { shallow } from 'enzyme';

import Comment from '.';

describe('Comment Component', () => {
  it('Should render a single component with body author', () => {
    const data = {
      body: 'This is my comment title',
      name: 'Comment Author'
    };

    const wrapper = shallow(<Comment data={data} />);

    expect(wrapper.find('.comment').length).toBe(1);
    expect(wrapper.find('.comment-body').text()).toBe(data.body);
    expect(wrapper.find('.comment-name').text()).toBe(`By: ${data.name}`);
  });
});