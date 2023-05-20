import i18n from '../i18n'
import { render } from '@testing-library/react';
import Header from "./Header";
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

test('renders title, description at header', () => {
  const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Header/>}/>
          </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    expect(getByText('Tech Blog ja'));
    expect(getByText('Lorem Ipsum Dolor Sit Amet'));
});
