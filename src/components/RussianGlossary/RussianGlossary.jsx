import axios from 'axios';
import React, { useState } from 'react';
import { toJSON } from 'usfm-js';
import { Chapter } from 'scripture-resources-rcl';
import { Paper } from '@material-ui/core';

const RussianGlossary = ({ url, chapter }) => {
  const [chapters, setChapters] = useState(false);
  // const [chapterKey, setChapterKey] = useState('1');

  const [usfmJson, setUsfmJson] = useState();

  React.useEffect(() => {
    setChapters(usfmJson?.chapters);
  }, [usfmJson]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setUsfmJson(toJSON(response.data));
    });
  }, [chapter, url]);

  // console.log(chapter[1]);

  return (
    <Paper className="item RussianGlossary" variant="outlined">
      <div> Chapters</div>
      <div>
        {chapters && chapters[chapter] !== undefined ? (
          <Chapter
            chapterKey={chapter}
            chapter={chapters[chapter]}
            paragraphs
            showUnsupported
          />
        ) : (
          'empty'
        )}
      </div>
    </Paper>
  );
};

export default RussianGlossary;
