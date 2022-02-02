import React, { useContext } from 'react';
import { FileContext } from 'gitea-react-toolkit';
import TsvTable from '../TsvTable/TsvTable';
import '../../styles/App.css';
import { useState } from 'react';
import RussianGlossary from '../../components/RussianGlossary/RussianGlossary';

const ErrorTable = () => {
  const { state: file } = useContext(FileContext);
  const {state:path} = useContext(FileContext);
  console.log(path?.path);
  const tab = '\t';

  const [showRG, setShowRG] = useState(false);

  console.log(file?.content.split('\n').map((el) => el.split('\t')));

  function renderCell(value, colIdx) {
    const handleClick = () => {
      console.log(value);
      setShowRG(showRG);
      //  <RussianGlossary />;
    };

    if (colIdx === 0) {
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
    <>
      <div className="item ErrorTable">
        <TsvTable
          data={file?.content}
          csvDelimiter={tab}
          tableClassName="table table-striped table-hover"
          renderCell={renderCell}
        />

      </div>

      {showRG && <RussianGlossary />}
    </>
  );
};

export default ErrorTable;
