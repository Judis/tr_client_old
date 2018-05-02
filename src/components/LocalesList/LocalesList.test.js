import React from 'react';
import ReactDOM from 'react-dom';
import LocalesList from './LocalesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocalesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
