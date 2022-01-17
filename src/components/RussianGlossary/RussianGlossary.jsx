import axios from 'axios';
import React, { useState } from 'react';
import { usfmJS, toJSON } from 'usfm-js';
import { Verse } from 'scripture-resources-rcl';

const baseURL = 'https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm';

const RussianGlossary = () => {
  const [bookData, setBookData] = useState({});
  const [verseObjects, setVersObjects] = useState([]);
  const [reference, setReference] = useState({});

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const usfmJSON = toJSON(response.data);
      const { chapters } = usfmJSON;
      const chapterKey = '1';
      const verseKey = '3';
      setVersObjects(chapters[chapterKey][verseKey].verseObjects);
      setReference({ book: 'tit', chapter: chapterKey, verse: verseKey });

    });
  }, []) 


  return (
    <div className="item RussianGlossary">

      <div>
        <Verse
          verseKey={3}
          verseObjects={verseObjects}
          reference={reference}
          showUnsupported
        />

      </div>
    </div>
  );
};

export default RussianGlossary;
