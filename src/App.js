import { Box } from '@material-ui/core';
import {
  AuthenticationContextProvider,
  FileContextProvider,
  RepositoryContextProvider,
} from 'gitea-react-toolkit';
import React from 'react';
import ErrorTable from './components/ErrorTable/ErrorTable';
import TreeView from './components/TreeView/TreeView';
import './styles/App.css';

function App() {
  const [repository, setRepository] = React.useState();
  const [filepath, setFilepath] = React.useState();
  const config = {
    server: 'https://git.door43.org',
    tokenid: 'PlaygroundTesting',
  };

  return (
    <AuthenticationContextProvider>
      <RepositoryContextProvider
        repository={repository}
        onRepository={setRepository}
        config={config}
        full_name="bsa/errors"
        branch="master"
      >
        <FileContextProvider filepath={filepath} onFilepath={setFilepath}>
          <div className="App">
            <Box className="grid-container">
              <TreeView />
              <ErrorTable />
            </Box>
          </div>
        </FileContextProvider>
      </RepositoryContextProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
