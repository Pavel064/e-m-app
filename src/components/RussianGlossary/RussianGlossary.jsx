import axios from 'axios';
import React, { useState } from 'react';
import { toJSON } from 'usfm-js';
import { Chapters } from 'scripture-resources-rcl';

const baseURL = 'https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm';

const RussianGlossary = () => {
  const [chapter, setChapter] = useState([]);
  // const [chapterKey, setChapterKey] = useState('1');

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      const usfmJSON = toJSON(response.data);
      const { chapters } = usfmJSON;

      setChapter(chapters);
      // console.log(chapters);
    });
  }, []);

  // console.log(chapter[1]);

  return (
    <div className="item RussianGlossary">
      <div> Chapters</div>
      <div>
       
        {chapter ? (
          <Chapters chapters={chapter} paragraphs showUnsupported />
        ) : (
          'pusto'
        )}
      </div>
    </div>
  );
};

export default RussianGlossary;
