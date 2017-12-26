import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

describe('<Table />', () => {
  beforeEach(() => {
    console.log('test')
  });
  it('renders "Table"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });

  it('shallow renders "Table"', () => {
    shallow(<Table />);
  });

  it('renders correctly',()=>{
      const tree = renderer.create(<Table/>).toJSON()
      expect(tree).toMatchSnapshot();
  })
});