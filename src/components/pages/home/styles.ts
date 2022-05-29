import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { HEADER_HEIGHT } from 'src/components/layout/styles'

const OFFSET = 3;
const SEARCH_HEIGHT = 4;

export const useStyles = makeStyles((theme: Theme) => ({
  search: {
    width: '100%',
    position: 'sticky',
    height: theme.spacing(SEARCH_HEIGHT),
    top: theme.spacing(HEADER_HEIGHT + OFFSET),
  },
  listContainer: {
    marginTop: theme.spacing(SEARCH_HEIGHT + OFFSET),
  },
}))
