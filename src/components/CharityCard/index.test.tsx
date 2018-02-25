import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CharityCard from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharityCard charity={{name: 'yourmom', description: 'idk lol'}}/>, div);
});
