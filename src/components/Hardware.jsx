import React from 'react';
import './styles.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hardware1 from '../assets/hardware_1.jpg'; 
import hardware2 from '../assets/hardware_2.jpg';
import hardware3 from '../assets/hardware_3.jpg';
import hardware4 from '../assets/hardware_4.jpg';
import hardware5 from '../assets/hardware_5.jpg';
const images =[hardware2,hardware3,hardware4,hardware5]


const Hardware = () => {
    return (
        <div>
            <h1><strong>HARDWARE</strong></h1>
            <p>This section discusses the hardware behind the project.</p>
            <br></br>
            <h2>-Selecting the Hardware-</h2>
            <br></br>
            <p>
                There was deep consideration on the hardware to use with the pi's gpio pin outs. This project could be done very cheaply with an RC car you may already have, a raspberry pi camera or camera laying around, and a breadboard.
                Other implementations exist where it can be done with the inference on a remote <a href="https://pdfs.semanticscholar.org/ca62/a8cd306508029565e641148ffc468ab10bb7.pdf"> server. </a>
                Due to time constraints and to limit hardware issues, I went with a prefab kit. I bought it on <a href="https://www.amazon.com/SunFounder-Raspberry-Supports-Multifunctional-Electronic/dp/B08F46Q24N"> amazon</a> for around $80, and it had opensource libraries to interface with the hardware.
                What made it a better deal was it included ultrasonic and grayscale sensors along with the camera. I had my own raspberry pi 4b from a previous project. Down the road, adding data for these can help deep learning algorithms learn better patterns about their environments.
            </p>
            <br></br>
            <img src={hardware1} alt="Hardware 1" style={{ width:'400px', height: '500px' }} />
           <br></br>
            <h2> -Assembly- </h2>
            <br></br>
            <p>
                Documentation made assembling the car rather painless. Nothing is ever completely smooth though - I ran into an issue where I had installed the panning servo motor on the car incorrectly. This cost me about an hour
                and some vulgarity as the prefabricated body didn't allow for a screwdriver to reach under the steering's control arms to remove it. After removing the front wheels and steering assembly, I was able to properly adjust the servo to the correct orientation.

            </p>
            <br></br>
        <div>
            <Carousel  showThumbs={false} >
        
                {images.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>
        </div>
        <br></br>
            <h2>-Flashing the OS and installing Dependcies-</h2>
            <br></br>
            <p>This is where I encountered severe issues. The working OS is Debian Bookworm. It is a flavor of linux that is based off of ubuntu. However, when first jumping in I ran into several issues. When I was getting started I installed a 32 bit OS and quickly discovered my mistake when installing tensorflow (at this point it is needed for the camera). I had then installed bookworm, a 64 bit recent pi os. I pulled the depenedcies from sunfounder for the hat to work with my pi. 
                I had issues with python dependencies because of how the files were formatted. The files were moved and then I ran out of memory. Since they were moved and not copied, I am not sure why I ran out of memory. Issues with this were due to how my working directory was set up. Once I fixed it, I went to bed. When I woke up the pi no longer connect to my network. I tried connecting it with an ethernet cable and then sshing, but it still had issues. I ended up having to reflash it again and go through the same process.
                I made special note to add a bunch of possible networks so I wouldn't face the issues agian. This was done through a wpa config file on the linux machine. After the open source robot hat dependecies, libaries such as tensorflow lite, and opencv were installed - I was read to collect data. 
                
                 </p>


        </div>
    );
};

export default Hardware;
