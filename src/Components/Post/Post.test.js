import React from 'react';
import { shallow } from 'enzyme';

import Post from '.';

import { posts } from '../../Bll/mocks/posts';

describe('Post Component', () => {
  const post = posts[0];

  const wrapper = shallow(<Post data={post} />);

  it('Should have a single post', () => {
    expect(wrapper.find('.post').length).toBe(1);
  });

  it('Should have a title matching post.title', () => {
    expect(wrapper.find('.post-title').text()).toBe(post.title);
  });

  it('Should have an author matching post.userName', () => {
    expect(wrapper.find('.post-creator').text()).toContain(`${post.userName}`);
  });

  it('Should have a body matching post.body', () => {
    expect(wrapper.find('.post-summary').text()).toBe(`${post.body}`);
  });
});
