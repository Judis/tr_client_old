import React from 'react';
import ReactDOM from 'react-dom';
import TranslationsList from './TranslationsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TranslationsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
