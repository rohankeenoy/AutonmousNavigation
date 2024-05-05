import React, {useState, useEffect} from 'react';
import Abstract from '../components/Abstract'
import Hardware from '../components/Hardware'
import DataCollection from '../components/DataCollection'
import MoreData from '../components/MoreData'
import '../components/styles.css'; 

const Home = () => {

    return (
        <div>

            <h1> Light-weight Deep Learning for Autonomous Navigation on Raspberry Pi 4 </h1>
            <h2>By Rohan Keenoy</h2>
            <br></br><br></br>
            <Abstract/>
            <hr></hr>
            <Hardware/>
            <hr></hr>
            <DataCollection/>
            <hr></hr>
            <MoreData/>
            <h1>Fine-Tuning</h1>
            <h1>Future Progress</h1>
            <h1>Conclusion</h1>
            <footer>
      Engineered by <a href="https://rohan-keenoy.web.app/" target="_blank" rel="noopener noreferrer">Rohan Keenoy</a></footer>
        </div>
    )
}

export default Home;