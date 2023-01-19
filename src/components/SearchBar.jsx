import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    
    const [search, setSearch] = useState("");
    const [uid, setUid] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}/${uid}/`);
    }
    
    return (
        <form onSubmit={ e => { handleSubmit(e) } }>
            <div className="container center p-3 d-flex justify-content-center align-center" style={ {gap: "15px"} }>
                <div className="input-group mb-3">
                    <span className="input-group-text">Search for: </span>
                    <br />
                    <select className="form-select" onChange={ (e) => { setSearch(e.target.value) } }>
                        <option>Choose a search category!</option>
                        <option>people</option>
                        <option>planets</option>
                        <option>starships</option>
                    </select>
                </div>
            
                <div className="input-group mb-3">
                    <span className="input-group-text">ID: </span>
                    <br />
                    <input type="number" onChange={ (e) => { setUid(e.target.value) } }/>
                </div>
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

export default SearchBar