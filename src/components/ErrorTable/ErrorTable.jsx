import React, { useContext } from 'react';
import { FileContext } from 'gitea-react-toolkit';
import TsvTable from '../TsvTable/TsvTable';
import '../../styles/App.css';
import { useState } from 'react';
import RussianGlossary from '../../components/RussianGlossary/RussianGlossary';
import { Paper } from '@material-ui/core';

const ErrorTable = () => {
  const { state: file } = useContext(FileContext);
  const { state: path } = useContext(FileContext);

  const splitPath = path?.path.split('/').map((el) => el.split('_'));

  const tab = '\t';

  const [showRG, setShowRG] = useState(false);

  function renderCell(value, colIdx) {
    const handleClick = () => {
      const getNameBook = splitPath[1][1].split('.');
      const nameBook = getNameBook[0];
      let bookURL;
      if (nameBook === 'EST') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/17-EST.usfm';
      }
      if (nameBook === 'JER') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/24-JER.usfm';
      }
      if (nameBook === 'JON') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/32-JON.usfm';
      }
      if (nameBook === 'MAT') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/41-MAT.usfm';
      }
      if (nameBook === 'MIC') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/33-MIC.usfm';
      }
      if (nameBook === 'RUT') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm';
      }
      if (nameBook === 'TIT') {
        bookURL = 'https://git.door43.org/ru_gl/ru_rob/src/branch/master/57-TIT.usfm';
      }

      console.log(bookURL);
      console.log(nameBook);
      console.log(value.split(''));
      setShowRG(true);
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
      <Paper className="item ErrorTable" variant='outlined'>
        <TsvTable
          data={file?.content}
          csvDelimiter={tab}
          tableClassName="table table-striped table-hover"
          renderCell={renderCell}
        />
      </Paper>
      {showRG && <RussianGlossary />}
    </>
  );
};

export default ErrorTable;
