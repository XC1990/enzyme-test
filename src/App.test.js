import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('<App />', () => {
  beforeEach(() => {
    console.log('test')
  });

  it('renders "App"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('shallow renders "App"', () => {

    shallow(<App />);
  });
});