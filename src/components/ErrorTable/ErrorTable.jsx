import React, { useContext } from 'react';
import { FileContext } from 'gitea-react-toolkit';
import TsvTable from '../TsvTable/TsvTable';

const ErrorTable = () => {
  const { state: file } = useContext(FileContext);
  const tab = '\t';
  console.log(file?.content.split('\n').map((el) => el.split('\t')));


  function renderCell (value, colIdx, rowIdx) {
    if(colIdx===0) {
      return (<a href='#'>{value}</a>)
    } else {
      return value
    }
   

  }
  return (
    <div className="item ErrorTable">
      <TsvTable
        data={file?.content}
        csvDelimiter={tab}
        tableClassName="table table-striped table-hover"
        renderCell= {renderCell}
      />
    </div>
  );
};

export default ErrorTable;
