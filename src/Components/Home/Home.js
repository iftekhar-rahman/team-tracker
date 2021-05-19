import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import './Home.css';
import Leagues from '../Leagues/Leagues';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])
    // console.log(leagues);

    return (
        <React.Fragment>
            <div className="banner-area">
                <h1>Team Tracker</h1>
            </div>
            <Container fixed>
                <div className="league-content">
                    {
                        leagues.map(league => <Leagues league={league}></Leagues>)
                    }
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;