import React from 'react';
import { shallow } from 'enzyme';

import { posts } from '../../Bll/mocks/posts';

import PostsList from '.';

describe('PostsList Componet', () => {
  it('Should render a list of Posts', () => {
    const wrapper = shallow(<PostsList posts={posts} />)

    expect(wrapper.children().length).toBe(posts.length)
  });
});
