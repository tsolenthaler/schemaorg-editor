import React from 'react';

import Header from './Header';
import Content from './Content';

import { ThemeProvider } from '@/app/theme';

const Layout = _ => <ThemeProvider>
  <section className="full-size">
    <Header />
    <Content />
  </section>
</ThemeProvider>;

export default Layout;
