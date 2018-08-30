import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Common Search Component', () => {
  it('Should render a simple text box', () => {
    const defaultValue = 'Default value';
    const wrapper = shallow(<Search
      onChange={() => { }}
      className='test-css'
      value={defaultValue} />);

    expect(wrapper.find('.test-css').length).toBe(1);
    expect(wrapper.find('input').get(0).props.value).toBe(defaultValue);
  });

  describe('Changing Search input value', () => {
    const defaultValue = 'Default value';
    const onChangeMock = jest.fn().mockImplementationOnce(event => {
      wrapper.setProps({ value: event.target.value });
    })

    const wrapper = shallow(<Search
      onChange={onChangeMock}
      className='test-css'
      value={defaultValue} />);

    const event = { target: { value: 'Changed' } };

    wrapper.find('input').simulate('change', event);

    it('Should call onChange once', () => {
      expect(onChangeMock.mock.calls.length).toBe(1);
    });

    it('Should call onChange with the event argument', () => {
      expect(onChangeMock).toBeCalledWith(event);
    });

    it('Should update input value', () => {
      expect(wrapper.find('input').get(0).props.value).toBe(event.target.value);
    });
  })

  describe('Rendering a datalist for input', () => {
    it('Should have 3 items in data list', () => {

      const defaultValue = 'Default value';
      const list = [{ value: 'value_1' }, { value: 'value_2' }, { value: 'value_3' }];
      const wrapper = shallow(<Search
        onChange={() => { }}
        className='test-css'
        dataList={list}
        value={defaultValue} />);

      expect(wrapper.find('datalist').children().length).toBe(3);
    });
  })

});