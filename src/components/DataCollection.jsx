import React from 'react';


const DataCollection = () =>{


    return (
        <div>
            <h1>
                Data Collection
            </h1>
            <br></br>
            <h2>
                -Data Methodologies-
            </h2>
            <br></br>
            <p> Data Collection was done locally on the pi. Everytime the pi turns, the camera is programmed to turn to the same angle as the steering. It also looks down -15 degrees. The reason the looking down was implemented is so that the camera would be able to pick up the lines on the left/right side of it and not focus too much on the outside lines. The steering servo was set up to steer at 30 degrees (right) or -30 degree (left).
                Using a servo like this for steering is not great application, but allowed for 3 classes of straight (0), left, and right. This was more of a hardware limitation, with a proper RC car or a vehicle out in the wild, it would have multiple steering angles.
                With everything considered with the pi, I had to figure out what a good blend of tracks would be. I decided on the ones below. One is an oval shape similar to a nascar track. The other one is a more complex track with several different turns. The last one was a basic circle.
                The tracks were created in a fellow UMSL students garage. (Thank you Nick!) Lighting was moderate with clutter along the walls, this was perfect to add some real life noise. The pictures themselves were taken either every time a button was pushed for direction (wasd) or every second. The car was driven by myself on my computer. 
                After the tape was placed, I fired up "python ./dataCollection" and was logging my data! 10 laps in one direction was recorded and then 10 laps in the reverse direction was logged. Sometimes, the pi did lag so the driving wasn't perfect. This was also good for adding noise. 
            </p>
            <h2>
                -Data Annotation-
            </h2>
            <br></br>
            <p>
                Data annotation was fairly straight forward. Using the OS library, I was able to create directories for the forward and reverse tracks. The annotations were stored in the seperate jpgs themselves.
                This included speed, angle, and exact time. The angle was the only thing used and was extracted during data processing on my laptop. 
            </p>
            <h2>
                -Creating Masks-
            </h2>
            <br></br>
        </div>
    )
}
export default DataCollection;