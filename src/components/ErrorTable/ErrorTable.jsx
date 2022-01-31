import React, { useContext } from 'react';
import { FileContext } from 'gitea-react-toolkit';
import TsvTable from '../TsvTable/TsvTable';

const ErrorTable = () => {
  const { state: file } = useContext(FileContext);
  const tab = '\t';

  console.log(file?.content.split('\n').map((el) => el.split('\t')));

  function renderCell(value, colIdx, rowIdx) {
    if (colIdx === 0) {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick={handleClick}>
          {value.split('')}
        </a>
      );
    } else {
      return value;
    }
  }
  return (
    <div className="item ErrorTable">
      <TsvTable
        data={file?.content}
        csvDelimiter={tab}
        tableClassName="table table-striped table-hover"
        renderCell={renderCell}
      />
    </div>
  );
};

export default ErrorTable;
