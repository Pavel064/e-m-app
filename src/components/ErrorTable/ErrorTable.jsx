import React, { useContext } from "react";
import {FileContext} from 'gitea-react-toolkit';

const ErrorTable = () => {
  const { state: file, component: fileComponent } = useContext(FileContext);
  console.log(file);


  return (
    <div className="item ErrorTable">
      
    </div>
  );
};

export default ErrorTable
