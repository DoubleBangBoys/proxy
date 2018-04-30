import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';


enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  it('should be defined', () => {
    const id = 10;
    const wrapper = enzyme.shallow(<App
      id={id}
    />);
    expect(wrapper).toBeDefined();
  });

  it('should render correctly', () => {
    const id = 10;

    const tree = enzyme.shallow(<App
      id={id}
    />);
    expect(tree).toMatchSnapshot();
  });
});
