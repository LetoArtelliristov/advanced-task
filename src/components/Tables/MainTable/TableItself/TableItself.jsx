import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import TableHeader from '../TableHeader/TableHeader';
import TableRows from '../TableRows/TableRows';

import '../../TableStyles/TableItself/TableItself.scss';


const TableItself = ({
  tableId,
  rows,
  deleteFunc,
  editItem,
  header,
}) => (
  <TableContainer className="table-itself-container" component={Paper}>
    <Table stickyHeader sx={{ minWidth: 800 }} aria-label="simple table">
      <TableHeader header={header} />
      <TableRows tableId={tableId} rows={rows} deleteFunc={deleteFunc} editItem={editItem} />
    </Table>
  </TableContainer>
);

export default TableItself;
