import React, {useContext} from "react";
import {RepositoryContext, FileContext} from 'gitea-react-toolkit';
import { Paper } from "@material-ui/core";

const TreeView = () => {
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);
  // eslint-disable-next-line no-unused-vars
  const { state: file, component: fileComponent } = useContext(FileContext);

  return (
    <Paper className="item TreeView">
      {(!repo && repoComponent) || fileComponent}
    </Paper>
  );
};

export default TreeView;


