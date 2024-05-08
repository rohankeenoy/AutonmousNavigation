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
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '350px', maxWidth: '500px'}}  />
                </div>
                ))}
            </Carousel>
            <h2><u>-Classification Model 3: Reducing the Size-</u></h2>
            <p>Accuracy of 0.6532567049808429</p>
            <Carousel  showThumbs={false} >
        
                {model3.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '350px', maxWidth: '500px'}}  />
                </div>
                ))}
            </Carousel>


            <h2><u>-Classification Using Segmented Images1: try to beat the previous-</u></h2>
            <p>Accuracy of 0.5957854406130269</p>
                <Carousel  showThumbs={false} >
            
            {mask1.map((URL, index) => (
            <div className="slide">
                <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '350px', maxWidth: '500px'}}  />
            </div>
            ))}
        </Carousel>

            <h2><u>-Classification Using Segmented Images2: slightly larger architecture-</u></h2>
            <p>Accuracy of 0.5766283524904214</p>
            <Carousel  showThumbs={false} >
            
            {mask2.map((URL, index) => (
            <div className="slide">
                <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '350px', maxWidth: '500px'}}  />
            </div>
            ))}
        </Carousel>
            <h2><u>-Discussion-</u></h2>
            <br></br>
            <p>Our models performed decently well and I am happy with the results. The baseline was calculated by iterating through steering angles and taking a count of how many each one occurs. I then took the max and divided by the N of the angles array. This gave us a baseline of 43%, in some cases we were 20% higher than that so I am happy.
                The best performing model was the 3rd classification model, this is because I changed some of the hyperparameters for regularization and reduced the size of the model by removing a dense layer. This yielded a great accuracy of 65%!. The masks as inputs yielded lower scores accross the board - there is some reason for this. 
                The masks that I made were very noisey, picking up things outside of the track as edges - as well as not actually picking up the edges. In literature review, I found that most people get a more accurate mask by applying some trignometry to it and reading the "good" masks which would help tremendously for the segmentation.
                That wasn't the main focus of the project, but I wanted to get started on it so once I build a better robot I have a starting point. The image classification could be imporved by just having better pictures and a larger quanity of it.Training times on the gpu were not bad, the best performing model took about 15 minutes to complete. With some more time spent tuning and adding data, the classification route would be the best route to go for this particular robot - since there are realistically only a few steering angle.
                Note in automobiles, rc cars, and more advanced robotics - angles can have a much larger ranged and aren't discrete to 30,-30, or 0. So this is where the masking model would come in with actual onboard preprocessing. From literature review, I did find some elegant solutions for this, and the page will be updated as I work on the project a bit more. 

            </p>
            <hr></hr>
        </div>
    )
}

export default Results;