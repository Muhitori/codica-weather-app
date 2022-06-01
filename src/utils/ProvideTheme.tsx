/* eslint-disable react/display-name */
import React, { ReactElement } from 'react';
import { defaultTheme } from 'src/components/common/theme';
import {  ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export const provider = (ui: ReactElement): ReactElement => {
  return (
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>
    </Provider>
  );
};
