import axios from 'axios';
import React, { useState } from 'react';
import { toJSON } from 'usfm-js';
import { Chapters } from 'scripture-resources-rcl';
import { Paper } from '@material-ui/core';


const RussianGlossary = ({url, chapter}) => {
  const [chapters, setChapters] = useState([]);
  // const [chapterKey, setChapterKey] = useState('1');

  React.useEffect(() => {
    axios.get(url).then((response) => {
      const usfmJSON = toJSON(response.data);
      const data  = usfmJSON;

      setChapters(data.chapters);
      // console.log(chapters);
    });
  }, [url]);

  // console.log(chapter[1]);

  return (
    <Paper className="item RussianGlossary"  variant='outlined'>
      <div> Chapters</div>
      <div>
       
        {chapter ? (
          <Chapters chapters={chapters} paragraphs showUnsupported />
        ) : (
          'empty'
        )}
      </div>
    </Paper>
  );
};

export default RussianGlossary;
