import React from "react";
import { Routes, Route } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import NotFound from "./components/NotFound";

const App = () => {

    return (
        <div>
            <SearchBar />
            <Routes>
                <Route path="/people/:id/" element={ <People /> } />
                <Route path="/planets/:id/" element={ <Planets /> } />
                <Route path="/starships/:id/" element={ <Starships /> } />
                <Route path="/NotFound/" element={ <NotFound /> } />
            </Routes>
        </div>
    );
};

export default App;
