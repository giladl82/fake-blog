import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { PostPage } from '.';
import { mount } from 'enzyme';

jest.mock('../../Bll/fetch');

describe('PostPage Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/post/1']}>
        <Route path="/post/:id" component={PostPage} />
      </MemoryRouter>
    );
  });
  it('Should render Post and Comments in page', () => {
    expect(wrapper.html()).toContain('class="post-title"');
    expect(wrapper.html()).toContain('class="comment-body"');
  });
});
