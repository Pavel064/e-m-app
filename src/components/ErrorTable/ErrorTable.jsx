import React, { useContext } from 'react';
import { FileContext } from 'gitea-react-toolkit';
import { CsvToHtmlTable } from 'react-csv-to-table';

const ErrorTable = () => {
  const { state: file } = useContext(FileContext);
  const tab = "\t";
  return (
    <div className="item ErrorTable">
      <CsvToHtmlTable
        data={file?.content}
        csvDelimiter= {tab}
        tableClassName="table table-striped table-hover"
      />
    </div>
  );
};

export default ErrorTable;
