import React from 'react';

const Card = ({id, name, username, email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} height="200" width="200" />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;