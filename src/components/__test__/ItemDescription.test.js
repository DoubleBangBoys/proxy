import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ItemDescription from '../ItemDescription';


enzyme.configure({ adapter: new Adapter() });


describe('ItemDescription', () => {
  it('should be defined', () => {
    const sampleArray = ['Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'];

    const wrapper = enzyme.shallow(<ItemDescription
      array={sampleArray}
    />);
    expect(wrapper).toBeDefined();
  });
  it('should render correctly', () => {
    const sampleArray = ['Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'];

    const tree = enzyme.shallow(<ItemDescription
      array={sampleArray}
    />);
    expect(tree).toMatchSnapshot();
  });
});
