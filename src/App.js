import React from "react";
import ErrorTable from "./components/ErrorTable/ErrorTable";
import RussianGlossary from "./components/RussianGlossary/RussianGlossary";
import TreeView from "./components/TreeView/TreeView";
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <div className="grid-container">
                <TreeView/>
                <ErrorTable/>
                <RussianGlossary/>
            </div>
        </div>
    );
}

export default App;  
