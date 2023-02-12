import React from 'react';
import { useParams } from 'react-router-dom';

function SpecificProfile() {
    const { id } = useParams();
    return (
        <div>
            <p>Your profile id is {id} </p>
        </div>
    );
}

export default SpecificProfile;
