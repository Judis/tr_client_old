import React from 'react';
import ReactDOM from 'react-dom';
import PasswordRecovery from './PasswordRecovery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordRecovery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
