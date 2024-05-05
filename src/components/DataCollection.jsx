import React from 'react';
import mask1 from '../assets/mask_1.JPG';
import mask2 from '../assets/mask_2.JPG';
import mask3 from '../assets/mask_3.JPG';
import mask4 from '../assets/mask4.JPG';
import mask5 from '../assets/mask5.JPG';
import maskWContour1 from '../assets/maskWContour_1.JPG';
import maskWContour2 from '../assets/maskWContour_2.JPG';
import maskWContour3 from '../assets/maskWContour_3.JPG';
import maskWContour4 from '../assets/maskWContour_4.JPG';
import maskWContour5 from '../assets/maskWContour_5.JPG';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import blurryMask from '../assets/blurryMask.JPG';
import blurryContour from '../assets/blurryContour.JPG'
import track1 from '../assets/track1.jpg'
import track2 from '../assets/track2.jpg'
import track3 from '../assets/track3.jpg'
import steering0 from '../assets/steeringAngle0.JPG'
import steering30 from '../assets/steeringAngle-30.JPG'
const images = [mask1,maskWContour1, mask2,maskWContour2, mask3,maskWContour3, mask4,maskWContour4,mask5,maskWContour5]
const blurryEdges = [blurryMask,blurryContour]
const tracks = [track1,track2,track3]
const annotations = [steering0,steering30]
const DataCollection = () =>{


    return (
        <div>
            <h1>
                Data Collection
            </h1>
            <p>This section covers how data was captured, annotated, and how masks were created. </p>
            <br></br>
            <h2>
                -Data Methodologies-
            </h2>
            <br></br>
            <p> Data Collection was done locally on the pi. Everytime the pi turns, the camera is programmed to turn to the same angle as the steering. It also looks down -15 degrees. The reason the looking down was implemented is so that the camera would be able to pick up the lines on the left/right side of it and not focus too much on the outside lines. The steering servo was set up to steer at 30 degrees (right) or -30 degree (left).
                Using a servo like this for steering is not great application, but allowed for 3 classes of straight (0), left, and right. This was more of a hardware limitation, with a proper RC car or a vehicle out in the wild, it would have multiple steering angles.
                With everything considered with the pi, I had to figure out what a good blend of tracks would be. I decided on the ones below. One is an oval shape similar to a nascar track. The other one is a more complex track with several different turns. The last one was a basic circle.
                The tracks were created in a fellow UMSL students garage. (Thank you Nick!) Lighting was moderate with clutter along the walls, this was perfect to add some real life noise. The pictures themselves were taken either every time a button was pushed for direction (wasd) or every second. The car was driven by myself on my computer. 
                After the tape was placed, I fired up "python ./dataCollection" and was logging my data! 10 laps in one direction was recorded and then 10 laps in the reverse direction was logged. Sometimes, the pi did lag so the driving wasn't perfect. This was also good for adding noise. Before augmentation I collected 1305 samples on the three tracks. 
            </p>
            <br></br>
            <strong>The three tracks: </strong>
            <br></br>
            <Carousel  showThumbs={false} >
        
                {tracks.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>
            <h2>
                -Data Annotation-
            </h2>
            <br></br>
            <p>
                Data annotation was fairly straight forward. Using the OS library, I was able to create directories for the forward and reverse tracks. The annotations were stored in the seperate jpgs themselves.
                This included speed, angle, status (what action the robot is doing) and exact time. An example looks like this, "track3_track3_time_20240429_024326_angle_30_speed_1_status_turn right.jpg". The angle was the only thing used and was extracted during data processing on my laptop. 
                The data is all in numpy arrays that have related indicies. This means that the original photo array has releated steering angles in the steering angle array and masks in the masks array that correspond to each other. 
            </p>
            <br></br>
            <strong>Example of images with steering labels in their related arrays:</strong>
            <Carousel  showThumbs={false} >
        
                {annotations.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>
            <h2>
                -Creating Masks-
            </h2>
            <br></br>
            <p>
                Masks were created on my laptop within google colab. I used openCV2 to create the masks. The images were first converted to grayscale using COLOR_BGR2GRAY. This makes it easier for the Canny function to pick out the edges by reducing noise.
                Typically a 5x5 Gaussian filter is used before, but no noticable differences were observed when using the filter. (was not anymore sensitive - better for real time) Another problem is that the edges on the tape were often blurry, this added a lot of noise for the canny function to figure out.
                The canny function itsself finds intensity on the image using an edge gradient. Gradient direction is always perpendicular to the edges. The end result is a binary image with thin edges. 
                <br></br>
                
            </p>
            <p>
                Hysteresis Thresholding in the canny function takes in two values; a min and a max. The minValues are sure to be non edges and are discarded, edges above the max value in the intensity gradient are for sure edges. I did some experimenting on it, and lowering the lower threshold to around 45 and the upper one to abut 120 seemed to make it most sensitive to 
                the tape. I struggled with picking up background noise in the masks, but these values seemed to minimize it for the most part. There are still edges in the background clutter of the garage that show up, which possibly threw off my data. These masks are as good as it gets without reprogramming the hardware to constantly look down 
                or be in a less noisey garage. We rolled with the punches and experimented here, but a decent portion of the masks turned out okay. A solution would be to brute force by hand truth masks or have some sort of stability measurement for when to take a picture.

            </p>
            <br></br>
            <strong>Code and pictures of masks with the gaussian filters. I added the contours to the original image, that the canny function originally produced. </strong><br></br>
                <code>gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) </code><br></br>
                <code>edges = cv2.Canny(gray, 45, 120,5) #input image arrays, thresholds 45,120, and intensity</code><br></br>
                <code>contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE </code><br></br>
            <div>
            <Carousel  showThumbs={false} >
        
                {images.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>
        </div>  
        <p> 
            Some results are quite good and others are not so great. The not great masks pick up background noise, which skews the true values. I want to make note that in the real world, however, 
            it is certain that background edges are bound to be picked up depending on camera angle, lighting, and several other external factors. Especially if this detection would be done with real-time processing. So, I thought it would be good to include them. The main focus here really was to make sure our lines were able to be masked.
        </p>
        <p></p>
            <br></br>
            <p>
                Lastly, it is important to discuss the findContours method in open cv. Contours are a curve that joins continous points, that have the same color or intensity. They help with shape and object detection. It will
                take in three arguements where the first one is source, second is contour retrieval, and third is contour approximation. Using the previous canny edge detection, the edges are detected and can be used as a threshold for the contours. This really helped with fuzzy new Promise((resolve, reject) 
                input images where the tape lines were hard to find. This was to combat the noisey edges I had talked about above and better visualize them.  <br></br>
                <strong>An example of noisey-edge contour detection:</strong>
            </p>
            <Carousel  showThumbs={false} >
        
                {blurryEdges.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>

            
                
           
        </div>
    )
}
export default DataCollection;