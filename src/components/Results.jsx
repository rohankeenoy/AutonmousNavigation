import React from 'react';
import "./styles.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import model1Acc from '../assets/model1Accuracy.JPG';
import model1Loss from '../assets/model1Loss.JPG';
import model1PerformanceMetrics from '../assets/model1PerformanceMetrics.JPG'
import model2Metrics from '../assets/model2Metrics.JPG'
import model2Loss from '../assets/model2Loss.JPG'
import model2Accuracy from '../assets/model2Accuracy.JPG'
import model3Acc from '../assets/model3Acc.JPG'
import model3Loss from '../assets/model3Loss.JPG'
import model3Metrics from '../assets/model3Metrics.JPG'
import mask1Metrics from '../assets/masks1Metrics.JPG'
import mask1Acc from '../assets/mask1Acc.JPG'
import mask1Loss from '../assets/mask1Loss.JPG'
import mask2Metrics from '../assets/mask2Metrics.JPG'
import mask2Loss from '../assets/mask2Loss.JPG'
import mask2Acc from '../assets/mask2Acc.JPG'

const model1 = [model1PerformanceMetrics, model1Acc, model1Loss];
const model2 = [model2Metrics, model2Accuracy, model2Loss];
const model3 = [model3Metrics, model3Acc, model3Loss];
const mask1 = [mask1Metrics, mask1Acc, mask1Loss];
const mask2 = [mask2Metrics,mask2Acc,mask2Loss];


const Results = () => {

    return (
        <div>
            <h1>Results</h1>
            <h2>
                <u>-Classification Model 1: Overfitting-</u>
            </h2>
            <p>Accuracy of 0.5996168582375478</p>
            <Carousel  showThumbs={false} >
        
                {model1.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '500px'}}  />
                </div>
                ))}
            </Carousel>

            <h2><u>-Classificaiton Model 2: Adding some additional Regularization-</u></h2>
            <p>Accuracy of 0.6302681992337165</p>
            <Carousel  showThumbs={false} >
        
                {model2.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '500px'}}  />
                </div>
                ))}
            </Carousel>
            <h2><u>-Classification Model 3: Reducing the Size-</u></h2>
            <p>Accuracy of 0.6532567049808429</p>
            <Carousel  showThumbs={false} >
        
                {model3.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '500px'}}  />
                </div>
                ))}
            </Carousel>


            <h2><u>-Classification Using Segmented Images1: try to beat the previous-</u></h2>
            <p>Accuracy of 0.5957854406130269</p>
                <Carousel  showThumbs={false} >
            
            {mask1.map((URL, index) => (
            <div className="slide">
                <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '500px'}}  />
            </div>
            ))}
        </Carousel>

            <h2><u>-Classification Using Segmented Images2: slightly larger architecture-</u></h2>
            <p>Accuracy of 0.5766283524904214</p>
            <Carousel  showThumbs={false} >
            
            {mask2.map((URL, index) => (
            <div className="slide">
                <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '500px'}}  />
            </div>
            ))}
        </Carousel>
            <h2><u>-Discussion-</u></h2>

        </div>
    )
}

export default Results;