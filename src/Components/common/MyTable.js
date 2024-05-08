import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const MyTable = ({ data, columns, options }) => {



  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      filter={filterFactory()}
      pagination={paginationFactory(options)}
      headerClasses="d-none" // Cacher les en-têtes de colonnes
     filterPosition="top"
    />
  );
};

export default MyTable;
