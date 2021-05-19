import React from 'react';


const Leagues = (props) => {
    // console.log(props.league);

    const {strLeague, strSport, strLeagueAlternate} = props.league;

    return (
        <div className="single-league-item">
            <h3>{strLeague}</h3>
            <p>{strSport}</p>
            <p>{strLeagueAlternate}</p>
            <button>View detail ></button>
        </div>
    );
};

export default Leagues;