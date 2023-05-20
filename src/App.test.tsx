import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

test('renders learn react link', () => {
  render(
    <I18nextProvider i18n={i18n}>
       <App />
    </I18nextProvider>
  );
  const linkElement = screen.getByText('Tech Blog ja');
  expect(linkElement).toBeInTheDocument();
});
