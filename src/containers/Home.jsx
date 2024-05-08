import React, {useState, useEffect} from 'react';
import Abstract from '../components/Abstract'
import Hardware from '../components/Hardware'
import DataCollection from '../components/DataCollection'
import MoreData from '../components/MoreData'
import Fine from '../components/Fine'
import '../components/styles.css'; 

const Home = () => {

    return (
        <div>

            <h1> Light-weight Deep Learning for Autonomous Navigation on Raspberry Pi 4 </h1>
            <h2>By Rohan Keenoy</h2>
            <a href = "https://colab.research.google.com/drive/1q5Fq_i6Y9cXbd92Z6FnXdeG6jySK35ND?usp=sharing"> Google Colab Page</a>
            <a href = "https://github.com/rohankeenoy/auto-car">Github Repository</a>
            <br></br><br></br>
            <Abstract/>
            <hr></hr>
            <Hardware/>
            <hr></hr>
            <DataCollection/>
            <hr></hr>
            <MoreData/>
            <Fine/>
            <h1>Future Progress</h1>
            <h1>Conclusion</h1>
            <footer>
      Engineered by <a href="https://rohan-keenoy.web.app/" target="_blank" rel="noopener noreferrer">Rohan Keenoy</a></footer>
        </div>
    )
}

export default Home;