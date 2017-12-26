import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import { shallow } from 'enzyme';


describe('<MyComponent />', () => {
  beforeEach(() => {
    console.log('test')
  });
  it('renders "App"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });

  it('shallow renders "App"', () => {
    shallow(<Table />);
  });
});