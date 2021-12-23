import React, { useContext } from "react";
import {FileContext} from 'gitea-react-toolkit';
import { CsvToHtmlTable } from 'react-csv-to-table';


const ErrorTable = () => {
  
  const {state: file} = useContext(FileContext);

  return (
    <div className="item ErrorTable">
      {file?.content || 'ErrorTable'}
      <CsvToHtmlTable
  data={file?.content}
  csvDelimiter="\t"
  tableClassName="table table-striped table-hover"
/>     
    </div>
  );
};

export default ErrorTable
