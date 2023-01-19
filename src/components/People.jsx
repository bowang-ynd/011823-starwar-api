import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const People = () => {

    const [person, setPerson] = useState(null);
    const [planetName, setPlanetName] = useState("");
    const [planetId, setPlanetId] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchHomeworld = (str) => {
        axios.get(str)
            .then( res => {
                setPlanetName(res.data.name);
                setPlanetId(res.data.url.slice(30, res.data.url.length));
            })
            .catch( _ => navigate("/NotFound/") );
    }

    useEffect( () => {         
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then( res => setPerson(res.data) )
            .catch( _ => navigate("/NotFound/"));
        }, [id]);

    person ? 
        fetchHomeworld(person.homeworld) :
        console.log("no person found, and no homeworld found");

    return (
        <div className='container center'>
            {
                person ?             
                    <div>
                        <h2>{ person.name }</h2>
                        <ul>
                            <li>Height: { person.height }</li>
                            <li>Mass: { person.mass }</li>
                            <li>Hair Color: { person.hair_color }</li>
                            <li>Skin Color: { person.skin_color }</li>
                            <li>Homeworld: { planetName }</li>
                            <Link to={ `/planets/${ planetId }/` }>To {person.name}'s homeworld</Link>
                        </ul>
                    </div> : 
                    navigate("/NotFound/")
            }
        </div>
    )
}

export default People