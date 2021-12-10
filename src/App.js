import React from "react";
import {
    AuthenticationContextProvider,
    RepositoryContextProvider,
    FileContextProvider,
    }  from 'gitea-react-toolkit';
import ErrorTable from "./components/ErrorTable/ErrorTable";
import RussianGlossary from "./components/RussianGlossary/RussianGlossary";
import TreeView from "./components/TreeView/TreeView";
import './styles/App.css';

function App() {
    const [repository, setRepository] = React.useState();
    const [filepath, setFilepath] = React.useState();
    const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

    return (
        <AuthenticationContextProvider>
            <RepositoryContextProvider
                repository={repository}
                onRepository={setRepository}
                config={config}
                full_name='bsa/errors'
                branch='master'
                >
                <FileContextProvider
                        filepath={filepath}
                        onFilepath={setFilepath}
                    >
                    <div className="App">
                        <div className="grid-container">
                            <TreeView/>
                            <ErrorTable/>
                            <RussianGlossary/>
                        </div>
                    </div>
                </FileContextProvider>
            </RepositoryContextProvider>
        </AuthenticationContextProvider>
       
    );
}

export default App;  
