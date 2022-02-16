import { useState } from 'react';
import { Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { useApp } from '../hooks';
import SharedCircularProgress from '../shared-components/SharedCircularProgress';
import TableHeadResults from '../components/Table/TableHeadResults';
import { dataRowLevels } from '../utils/dataTableHeadResults';
import { dataResultTable, dataTotalTable } from '../utils/fakeDataResults';

const Results = () => {
  const { loading } = useApp();
  // eslint-disable-next-line no-unused-vars
  const [results, setResultsTable] = useState(dataResultTable);
  // eslint-disable-next-line no-unused-vars
  const [summary, setSummaryTable] = useState(dataTotalTable);

  if (results?.length === 0 && summary?.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          No existen resultados!
        </Typography>
      </div>
    );
  }

  if (loading) {
    return <SharedCircularProgress />;
  }

  return (
    <div className="w-xl h-lg mx-auto flex-grow overflow-x-auto overflow-y-auto">
      <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
        <TableHeadResults dataRowLevels={dataRowLevels} />
        <TableBody>
          {results?.map((item) => (
            <>
              <TableRow
                className="h-32 cursor-pointer bg-light-blue-500"
                // hover
                // role="checkbox"
                // aria-checked={isSelected}
                tabIndex={-1}
                key={item?.id}
              >
                <TableCell
                  className="p-0 font-bold"
                  component="th"
                  scope="row"
                  colSpan={3}
                  align="center"
                >
                  {item?.thematic}
                </TableCell>
                <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={17} />
              </TableRow>
              {item?.data?.map((subItem) => (
                <>
                  <TableRow
                    className="h-32 cursor-pointer bg-gray-400"
                    // hover
                    // role="checkbox"
                    // aria-checked={isSelected}
                    tabIndex={-1}
                    key={subItem?.id}
                  >
                    <TableCell
                      className="p-0 font-bold"
                      component="th"
                      scope="row"
                      colSpan={3}
                      align="center"
                    >
                      {subItem?.subThematic}
                    </TableCell>
                    <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={17} />
                  </TableRow>
                  {subItem?.values?.map((value) => (
                    <>
                      <TableRow
                        className="h-32 cursor-pointer"
                        hover
                        // role="checkbox"
                        // aria-checked={isSelected}
                        tabIndex={-1}
                        key={1}
                      >
                        <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={1}>
                          {value?.code}
                        </TableCell>
                        <TableCell
                          className="p-4 md:p-16"
                          component="th"
                          scope="row"
                          colSpan={1}
                          style={{ minWidth: '180px' }}
                        >
                          {value?.title}
                        </TableCell>
                        <TableCell
                          className="p-4 md:p-16"
                          style={{ minWidth: '370px' }}
                          component="th"
                          scope="row"
                          colSpan={1}
                        >
                          {value?.subTitle}
                        </TableCell>
                        <TableCell
                          className="p-4 md:p-16"
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {value?.total}
                        </TableCell>
                        {value?.results.map((result) => (
                          <TableCell
                            className="p-4 md:p-16"
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {result}
                          </TableCell>
                        ))}
                      </TableRow>
                    </>
                  ))}
                </>
              ))}
            </>
          ))}
          <TableRow
            className="h-32 cursor-pointer bg-gray-200"
            hover
            // role="checkbox"
            // aria-checked={isSelected}
            tabIndex={-1}
            // key={item.id}
          >
            <TableCell className="p-0" component="th" scope="row" colSpan={4} />
            {summary[0]?.results?.map((item) => (
              <>
                <TableCell className="p-0" component="th" scope="row" align="center" colSpan={1}>
                  {item > 0 ? 'Ok' : 'Incompleto'}
                </TableCell>
              </>
            ))}
          </TableRow>

          {summary?.map((resultTotal) => (
            <TableRow
              className="h-32 cursor-pointer bg-gray-200"
              hover
              // role="checkbox"
              // aria-checked={isSelected}
              tabIndex={-1}
              // key={item.id}
            >
              {resultTotal?.total ? (
                <>
                  <TableCell className="p-0" component="th" scope="row" colSpan={3} />
                  <TableCell className="p-0" component="th" scope="row" colSpan={1} align="center">
                    {resultTotal?.total}
                  </TableCell>
                </>
              ) : (
                <TableCell className="p-0" component="th" scope="row" colSpan={4} />
              )}
              {resultTotal.results.map((result) => (
                <>
                  <TableCell className="p-0" component="th" scope="row" align="center" colSpan={1}>
                    {result}
                  </TableCell>
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Results;
