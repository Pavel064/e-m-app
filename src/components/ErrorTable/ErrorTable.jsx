import React, { useContext } from "react";
import {FileContext} from 'gitea-react-toolkit';

const ErrorTable = () => {
  
  const {state: file} = useContext(FileContext);

  return (
    <div className="item ErrorTable">
      {file?.content || 'ErrorTable'}     
    </div>
  );
};

export default ErrorTable
