import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  actionsButtonWrapper: {
    // background: theme.palette.background.paper,
  },
  subHeader: {
    minWidth: 'max-content',
  },
}));

// eslint-disable-next-line react/prop-types
const TableHeadResults = ({ dataRowLevels }) => {
  const classes = useStyles();
  return (
    <TableHead className={clsx('', classes.subHeader)}>
      <TableRow className={clsx('h-28', classes.subHeader)}>
        {/* eslint-disable-next-line react/prop-types */}
        {dataRowLevels.levelOne.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-nowrap', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow className={clsx('h-28', classes.subHeader)}>
        {/* eslint-disable-next-line react/prop-types */}
        {dataRowLevels.levelTwo.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-nowrap', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow className={clsx('h-28', classes.subHeader)}>
        {/* eslint-disable-next-line react/prop-types */}
        {dataRowLevels.levelThree.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-normal', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadResults;
