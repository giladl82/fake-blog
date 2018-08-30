import React from 'react';
import { shallow } from 'enzyme';

import Select from './Select';

describe('Common Select Component', () => {
  const options = [
    { value: 1, text: 'one' },
    { value: 2, text: 'two' },
    { value: 3, text: 'three' },
    { value: 4, text: 'four' },
    { value: 5, text: 'five' }
  ];

  const wrapper = shallow(<Select onChange={() => {}} options={options} value={4} />);

  it('Should render a simple select with 5 options', () => {
    expect(wrapper.children().length).toBe(5);
  });

  it('Should render a simple select with the value 4', () => {
    expect(wrapper.find('select').get(0).props.value).toBe('4');
  });
});
