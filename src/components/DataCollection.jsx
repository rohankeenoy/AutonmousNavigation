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
            <p>
                Masks were created on my laptop within google colab. I used openCV2 to create the masks. The images were first converted to grayscale using COLOR_BGR2GRAY. This makes it easier for the Canny function to pick out the edges by reducing noise.
                Typically a 5x5 Gaussian filter is used before, but I found that it picks up more details in the background than on the track itself. Another problem is that the edges on the tape were often blurry, this added a lot of noise for the canny function to figure out.
                The canny function itsself finds intensity on the image using an edge gradient. Gradient direction is always perpendicular to the edges. The end result is a binary image with thin edges. 

                Hysteresis Thresholding in the canny function takes in two values; a min and a max. The minValues are sure to be non edges and are discarded, edges above the max value in the intensity gradient are for sure edges. I did some experimenting on it, and lowering the lower threshold to around 45 and the upper one to abut 120 seemed to make it most sensitive to 
                the tape. I struggled with picking up background noise in the masks, but these values seemed to minimize it for the most part. There are still edges in the background clutter of the garage that show up, which possibly threw off my data. These masks are as good as it gets without reprogramming the hardware to constantly look down 
                or be in a less noisey garage. We rolled with the punches and experimented here, but a decent portion of the masks turned out okay. A solution would be to brute force by hand truth masks or have some sort of stability measurement for when to take a picture.
                
            </p>
        </div>
    )
}
export default DataCollection;