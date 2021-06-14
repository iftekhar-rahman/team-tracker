import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const Leagues = (props) => {
    
    const {idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    // console.log(idLeague);

    const history = useHistory();
    const showLeagueDetail = idLeague => {
        const url = `league/${idLeague}`;
        // const url = `post/${id}`;
        history.push(url);
    }

    return (
        <div className="single-league-item">
            <p>ID: {idLeague}</p>
            <h3>{strLeague}</h3>
            <p>{strSport}</p>
            <p>{strLeagueAlternate}</p>
            <Button onClick={() => showLeagueDetail(idLeague)} variant="contained" color="secondary">View detail <FontAwesomeIcon  style={{marginLeft: '5px'}} icon={faArrowRight} /></Button>
        </div>
    );
};

export default Leagues;