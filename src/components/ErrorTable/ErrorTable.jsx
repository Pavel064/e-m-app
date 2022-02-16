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
  const [bookURL, setBookURL] = useState('');
  const [chapter, setChapter] = useState('');

  function renderCell(value, colIdx) {
    const handleClick = () => {
      const getNameBook = splitPath[1][1].split('.');
      const nameBook = getNameBook[0];

      console.log(nameBook);
      setChapter(value.split(':')[0]);

      const bookNames = {
        EST: '17-EST',
        JER: '24-JER',
        JON: '32-JON',
      };
      const _bookURL = `https://git.door43.org/ru_gl/ru_rob/raw/branch/master/${bookNames[nameBook]}.usfm`;
      setBookURL(_bookURL);

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
      <Paper className="item ErrorTable" variant="outlined">
        <TsvTable
          data={file?.content}
          csvDelimiter={tab}
          tableClassName="table table-striped table-hover"
          renderCell={renderCell}
        />
      </Paper>
      {showRG && <RussianGlossary url={bookURL} chapter={chapter} />}
    </>
  );
};

export default ErrorTable;
