import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css"
import Model1 from "../assets/model1_plot.png"
import Model2 from "../assets/model2_plot.png"
import Model3 from "../assets/model3_plot.png"
import Model4 from "../assets/model4_plot.png"
import Mask1 from "../assets/modelMask1_plot.png"
import Mask2 from "../assets/modelMask2_plot.png"

const models = [Model1,Model2,Model3];
const masks = [Mask1, Mask2];

const Fine = () => {

    return (
        <div>
            <h1>Fine Tuning</h1>
            <h2><u>-Selecting a pretrained model-</u></h2>
            <br></br>
            <p>The model is a pre trained model called efficient net. Efficient net is ideal for robotics because it has very high accuracy, minimized parameters, and is incredibly light weight to live on the pi. On the pi itself, the frame rate of images/video handling is much higher than resnet. More information can be found here <a href = "https://keras.io/api/applications/efficientnet/">Efficient Net</a>
            <p> Now there are two methods of robotic thinking I have thought of which invovled two different models. Keep in mind the steering angles are discrete with only 3 avaliable. This would be a great classification problem, however traditionally this is done with segmentation where masks are used as input and steering angle as truths. 
                For this method to be used, the robot will need some on board masking, but it is possible to also throw that to a deep learning architecture. For simplicity sake - I propose two models. One will be a classification, the other will take masks as input and predict steering angle. Note - these are simple masks, for these models to be more effective we will need to actually pull the angles from the masks themself. Due to time constraints, this was not fesiable - but may revisit in the future.
                The top layer of course was removed so it allows for training towards our data. The varient of efficient net used was B0 specifically because it accepts the smallest values for input. 
            </p>
            </p>
            <h2><u>Experimentation and Regularization</u></h2>
            <p> Much experimentation was done to see what regulaization methods I needed to add, turns out, adding regularization didn't help much. To me this is a data problem and would require looping and creating the data as said earlier in the data section.
            Some models would have small amounts of drop out between convolutions and dense layers. Batch normilzation was used, to ensure relu isn't skewing too much towards zero. L2 regularization was used for certain layers after a transformation in size was conducted. (for example going from 124 to 64 convolutional filters). 
            Many of this can be seen in the architectures below.
            
            </p>

            <h2><u>-The Models-</u></h2>
            <p> The model architectures are posted below. The model type 1 are experimental architectures where the models are simply classifying discrete steering angles. It might not as easily pick up on the patterns as in the masks images. The type 2 model is taking in 
                masks as testing and steering as true, in the future we should be able to calculate curvature in masks to make it a bit more continous, but for time constraints this will suffice and be a good baseline. The models have 6 to 4 convolutional filters and all output to a softmax 3 neuron output for the final layer.  </p>
            <h2><u>-Model type 1: classification Problem Architectures-</u></h2>
            <br></br>
            <Carousel  showThumbs={false} >
        
                {models.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '800px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>

            <h2><u>-Model type 2: Masking Problem-</u></h2>
            <br></br>
            <Carousel  showThumbs={false} >
        
                {masks.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '800px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>



        </div>
    )
}
export default Fine;