import React from 'react';
import ReactDom from 'react-dom';
import Calculadora from './Calculadora';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Calculadora />, div);
  ReactDom.unmountComponentAtNode(div);
});
