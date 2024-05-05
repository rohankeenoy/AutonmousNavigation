import React from 'react'
import './styles.css'
const Abstract = () => {


    return (
       <div>
            <h1><strong>ABSTRACT</strong></h1>
            <br></br>
            <p>
                The idea of autonomous cars have been around for a long time. It makes sense, most americans commutes are very long and our time can be better spent doing something more productive while we travel. 
                Autonomous navigation for robotics has also been a very hot topic. These are things that were of science fiction, but this fiction is very quickly becoming a reality.  If we want to see R2D2 in our lifetimes - we must have a robot that can navigate and decide where it needs to go. There are many robotics competitions that push the boundries of quick decision making, accuracy, and physical hardware engineering. These vary from <a href = "https://micromouseonline.com/" >micromouse</a>, <a href ="https://sites.google.com/view/armlab-cuicar/"> ARM Lab Competition,</a> <a href ="https://suas-competition.org/">SUAS </a> 
                and larger competitions such as <a href ="https://robotx.org/programs/robotx-challenge-2022/">Robot X</a> and <a href ="https://robotics.nasa.gov/robotic-competitions/">Robotics Alliance Project</a>. <strong>NOTE: These competetions have winners that use deep learning, however, very fast robots do not rely on deep learning.</strong> Autonmous navigation isn't just a competition of compute resources, hardware, and algorithm development - there are some real life systems that rely on deep learning networks to navigate. 
                Some recent examples are <a href ="https://medium.com/starshiptechnologies/how-neural-networks-power-robots-at-starship-3262cd317ec0">star ship's food delivery robots</a>, <a href = "https://neptune.ai/blog/self-driving-cars-with-convolutional-neural-networks-cnn#:~:text=Self%2Ddriving%20cars%20are%20autonomous,environment%20the%20car%20is%20in.">Vehicles (Tesla, Nividia, Rivian)</a>,
                , and <a href ="https://arxiv.org/pdf/1905.01657">military/comercial drones</a>.
                <br></br>
                <br></br>
                 Deep learning algorithms are typically limited by their <a href ="https://ide.mit.edu/wp-content/uploads/2020/09/RBN.Thompson.pdf"> compute resources </a>
                There have been some breakthroughs in minimizing compute resources for the inference, as written <a href="https://arxiv.org/pdf/2306.03078 "> here, </a> discusses weight compression techniques for the algorithms. The  <a href ="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Raspberry pi 4b</a> is a
                small compuiter typically used for robotics and light weight server projects. My model has 4gb of LPDDR4-3200 RAM and uses a quadcore cortex A72 64 bit processor @ 1.8ghz. This is impressive for a very small computing machine, but how does it handle a deep learning model? 
                <br></br>
                <br></br>
                <strong> This exposition explores data collection on a raspberry pi 4b, fine-tuning a light weight model remotely, and analyzing performance.</strong>

            </p>
            <br></br>
            <br></br>
       </div> 
    )
}

export default Abstract;