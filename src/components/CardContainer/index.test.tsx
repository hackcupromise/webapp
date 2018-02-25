import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardContainer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardContainer />, div);
});
