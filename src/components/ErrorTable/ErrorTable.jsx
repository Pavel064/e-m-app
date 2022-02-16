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
  console.log({path:path?.path.split('/')});
  const splitPath = path?.path.split('/').map((el) => el.split('_'));
  const splitPath1 = path?.path.split('/')[0];
  const tab = '\t';

  const [showRG, setShowRG] = useState(false);
  const [bookURL, setBookURL] = useState('');
  const [chapter, setChapter] = useState('');

  function renderCell(value, colIdx) {
    const handleClick = () => {
      const getNameBook = splitPath[1][1].split('.');
      const nameBook = getNameBook[0];

      setChapter(parseInt(value.split(':')[0]));

      const bookNames = {
        GEN: '01-GEN',
        EXO: '02-EXO',
        LEV: '03-LEV',
        NUM: '04-NUM',
        DEU: '05-DEU',
        JOS: '06-JOS',
        JDG: '07-JDG',
        RUT: '08-RUT',
        1SA: '09-1SA',
        2SA: '10-2SA',
        1KI: '11-1KI',
        2KI: '12-2KI',
        1CH: '13-1CH',
        2CH: '14-2CH',
        EZR: '15-EZR',
        NEH: '16-NEH',
        EST: '17-EST',
        JOB: '18-JOB',
        PSA: '19-PSA',
        PRO: '20-PRO',
        ECC: '21-ECC',
        SNG: '22-SNG',
        ISA: '23-ISA',
        JER: '24-JER',
        LAM: '25-LAM',
        EZK: '26-EZK',
        DAN: '27-DAN',
        HOS: '28-HOS',
        JOL: '29-JOL',
        AMO: '30-AMO',
        OBA: '31-OBA',
        JON: '32-JON',
        MIC: '33-MIC',
        NAM: '34-NAM',
        HAB: '35-HAB',
        ZEP: '36-ZEP',
        HAG: '37-HAG',
        ZEC: '38-ZEC',
        MAL: '39-MAL',
        MAT: '41-MAT',
        MRK: '42-MRK',
        LUK: '43-LUK',
        JHN: '44-JHN',
        ACT: '45-ACT',
        ROM: '46-ROM',
        1CO: '47-1CO',
        2CO: '48-2CO',
        GAL: '49-GAL',
        EPH: '50-EPH',
        PHP: '51-PHP',
        COL: '52-COL',
        1TH: '53-1TH',
        2TH: '54-2TH',
        1TI: '55-1TI',
        2TI: '56-2TI',
        TIT: '57-TIT',
        PHM: '58-PHM',
        HEB: '59-HEB',
        JAS: '60-JAS',
        1PE: '61-1PE',
        2PE: '62-2PE',
        1JN: '63-1JN',
        2JN: '64-2JN',
        3JN: '65-3JN',
        JUD: '66-JUD',
        REV: '67-REV',
      };
      const _bookURL = `https://git.door43.org/ru_gl/${splitPath1}/raw/branch/master/${bookNames[nameBook]}.usfm`;
      setBookURL(_bookURL);
      console.log(_bookURL);
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
