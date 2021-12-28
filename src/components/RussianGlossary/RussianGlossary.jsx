import axios from 'axios';
import React, { useState } from 'react';
import { toJSON } from 'usfm-js';

const baseURL = 'https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm';

const RussianGlossary = () => {
  const [bookData, setBookData] = useState({});

  function getBookText() {
    axios
      .get(baseURL)
      .then((response) => {
        const jsonData = toJSON(response.data);
        setBookData(jsonData);
      });
  }

  return (
    <div className="item RussianGlossary">
      <button onClick={getBookText}>GET BOOKTEXT</button>
      {bookData || ' No data'}
    </div>
  );
};

export default RussianGlossary;
