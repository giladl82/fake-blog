import React from 'react';
import { shallow } from 'enzyme';

import Post from '.';

describe('Post Component', () => {
  const post = {
    id: 1,
    userId: 1,
    userName: 'The Autor name',
    title: 'This is the tile for the post',
    body: 'This is the body for the post'
  };

  it('Should have on post with a title, author and body ', () => {
    const wrapper = shallow(<Post data={post} />)

    expect(wrapper.find('.post').length).toBe(1)
  });
});
