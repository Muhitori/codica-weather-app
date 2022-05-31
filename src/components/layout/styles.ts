import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const HEADER_HEIGHT = 8;

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    width: '100%',
    position: 'sticky',
    height: theme.spacing(HEADER_HEIGHT),
  },
  content: {
    height: `calc(100vh - ${theme.spacing(HEADER_HEIGHT)})`,
  },
}))
