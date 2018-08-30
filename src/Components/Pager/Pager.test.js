import React from 'react';
import { shallow } from 'enzyme';

import Pager from '.';

describe('Pager component', () => {
  it('Should render pager with number of pages to display and right current page', () => {
    const currentPage = 3;
    const numOfPagesToDisplay = 5;
    const totalPages = 10;
    const urlPath = '/';
    const onClick = '';

    const wrapper = shallow(<Pager
      currentPage={currentPage}
      numOfPagesToDisplay={numOfPagesToDisplay}
      totalPages={totalPages}
      urlPath={urlPath}
      onClick={onClick}
    />)

    expect(wrapper.find('.pager-current').text()).toBe('3');
    expect(wrapper.find('.pager-link').length).toBe(4);
  })

  describe('Renders current page in the right location', () => {
    it('Should be the second item in pager items', () => {
      const currentPage = 2;
      const numOfPagesToDisplay = 5;
      const totalPages = 10;
      const urlPath = '/';
      const onClick = '';

      const wrapper = shallow(<Pager
        currentPage={currentPage}
        numOfPagesToDisplay={numOfPagesToDisplay}
        totalPages={totalPages}
        urlPath={urlPath}
        onClick={onClick}
      />)

      expect(wrapper.find('.pager').childAt(1).type()).toBe('span');
    })

    it('Should be the third item in pager items', () => {
      const currentPage = 6;
      const numOfPagesToDisplay = 5;
      const totalPages = 10;
      const urlPath = '/';
      const onClick = '';

      const wrapper = shallow(<Pager
        currentPage={currentPage}
        numOfPagesToDisplay={numOfPagesToDisplay}
        totalPages={totalPages}
        urlPath={urlPath}
        onClick={onClick}
      />)

      expect(wrapper.find('.pager').childAt(2).type()).toBe('span');
    })
  })

  it('Should render pager with number of pages to display as total pages', () => {
    const currentPage = 1;
    const numOfPagesToDisplay = 5;
    const totalPages = 2;
    const urlPath = '/';
    const onClick = '';

    const wrapper = shallow(<Pager
      currentPage={currentPage}
      numOfPagesToDisplay={numOfPagesToDisplay}
      totalPages={totalPages}
      urlPath={urlPath}
      onClick={onClick}
    />)

    expect(wrapper.children().length).toBe(2);
  })
})