import React, {useContext} from "react";
import {RepositoryContext, FileContext} from 'gitea-react-toolkit';

const TreeView = () => {
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  const { state: file, component: fileComponent } = useContext(FileContext);

  return (
    <div className="item TreeView">
      {(!repo && repoComponent) || fileComponent}
      </div>
  );
};

export default TreeView;
