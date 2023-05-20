import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import i18n from '../i18n'
import NavBar from './NavBar';

test('renders at navbar', () => {
  const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<NavBar/>}/>
          </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    expect(getByText('HOME'));
    expect(getByText('ABOUT'));
    expect(getByText('新着記事'));
});
