import { AppBar, Box } from '@mui/material';
import React from 'react';
import { HEADER_HEIGHT, useStyles } from './styles'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.appBar} />
      <Box className={classes.content} mt={HEADER_HEIGHT}>
        {children}
      </Box>
    </>
  )
}