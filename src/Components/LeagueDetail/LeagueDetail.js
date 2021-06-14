import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './LeagueDetail.css'
import players from '../../img/maleplayers.png';
import { useState } from 'react';
import { useParams } from 'react-router';



const LeagueDetail = () => {

    const {idLeague} = useParams();
    // const [detail, setDetail] = useState([]);
    console.log(idLeague);
    const [leagues, setLeagues] = useState([]);


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [idLeague])


    // console.log(leagues);

    return (
        <React.Fragment>
            <div className="detail-content">
                <h1 style={{color: '#fff'}}>Seasonal League </h1>
            </div>
            <Container fixed className="detail-content-area">
                <div className="league-box">
                    <div className="left">
                        <p>leagues ID: {idLeague}</p>
                        <h3>Title: </h3>
                        <p>Founded: January 20, 1980</p>
                        <p>Country: German</p>
                        <p>Sports: Football</p>
                        <p>Gender: Male</p>
                    </div>
                    <div className="right">
                        <img src={players} alt="" />
                    </div>
                </div>
                <div className="text-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi esse commodi neque sapiente suscipit ullam corrupti, voluptatum mollitia a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, porro molestias animi odit delectus velit eum commodi, pariatur itaque id placeat culpa provident, doloribus nobis necessitatibus dolorum iure quo. Deserunt odit placeat consequatur consectetur porro ipsam perferendis totam numquam rerum.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum debitis temporibus ad sunt id et corrupti, praesentium incidunt ipsa architecto reprehenderit velit quam asperiores accusantium, adipisci nihil rerum aliquam? Magnam!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam pariatur aliquid officiis commodi dicta molestias, maxime in facere veniam inventore fugit recusandae a? Ipsum, a labore? Magni impedit aut maxime, itaque corrupti fuga asperiores reprehenderit nemo officiis natus molestiae? Recusandae eum eos quod quia adipisci perferendis maxime temporibus esse quaerat atque, doloribus ipsum autem quos. Iure in, assumenda veniam aliquam earum soluta. Saepe enim deserunt quaerat obcaecati hic! Qui.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default LeagueDetail;