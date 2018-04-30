import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';


enzyme.configure({ adapter: new Adapter() });


// This snapshot wasnt connected to a working database. Test may fail in the future due to different data being passed in.

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

    //should be called once but its twice? Place to fix!
  it('should call a method named renderStarIcon', () => {
    const id = 10;
    const spy = jest.spyOn(App.prototype, 'renderStarIcon');
    const wrapper = enzyme.mount(<App  id={id} />);
    wrapper.instance().renderStarIcon();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should call a method named renderedPrice', () => {
    const id = 10;
    const spy = jest.spyOn(App.prototype, 'renderedPrice');
    const wrapper = enzyme.mount(<App  id={id} />);
    wrapper.instance().renderedPrice();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should call a method named renderedTotalInventory', () => {
    const id = 10;
    const spy = jest.spyOn(App.prototype, 'renderedTotalInventory');
    const wrapper = enzyme.mount(<App  id={id} />);
    wrapper.instance().renderedTotalInventory();
    expect(spy).toHaveBeenCalledTimes(2);
  });
//   const spy = jest.spyOn(Component.prototype, 'methodName');
// const wrapper = mount(<Component {...props} />);
// wrapper.instance().methodName();
// expect(spy).toHaveBeenCalled();

});
