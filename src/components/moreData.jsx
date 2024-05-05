import React from 'react'
import './styles.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import augOg from '../assets/aug_og.JPG'
import augBrighter from '../assets/augBrighter.JPG'
import augFlipped from '../assets/augFlipped.JPG'
import augZoom from '../assets/augZoom.JPG'

const augmentedEx = [augOg, augBrighter,augFlipped,augZoom]
const MoreData = () => {


    return (
        <div>
            <h1> Stohcastic Augmentation and Regularization Methods</h1>
            <p>This section covers augmentation techniques and why different regulaization were applied to the model.</p>
            <h2>-Stohcastic Augmentation-</h2>
            <br></br>
            <p>Augmentations methods were used from the iaa library, using the augementers method. Typically when working with keras there are built in functions that are easily callable, but those functions will gurantee that 
                the augmentation will be applied, with the only randomness being how extreme the augmentation is. I wanted to ensure a totally random augmentation process. The way it works is it cycles through the data set and there is a 
                50% chance that any of the augmentations may be applied. This means that there is a 50% chance brightness will increase and an independent 50% the image will be mirrored (steering angle flipped with it). This augmentation process also occurs before the masking process and is 
                added to the orginal image array. Using this method doubles our images, however I can iterate more in the future for further study. Using a stohcastic random variable, we are able to have a chance to apply any one augmentation function to one image.
            </p>
            <br></br>
            <strong>The driver function for the stohcastic augmentation process: </strong>
            <br></br>
            <pre>
            <code>
            def augment(image, angle): <br></br>
                image = np.array(image) <br></br>
                angle = angle <br></br>
                // because data is so limited I wanted to have a chance of 50% for any of the augmentations to occur<br></br>
                if np.random.random() &lt; 0.50:<br></br>
                    // increase the brightness<br></br>
                    image = addBrighter(image)<br></br>
                if np.random.random() &lt; 0.50:<br></br>
                    // create a zoomed image<br></br>
                    image = addZoom(image)<br></br>
                if np.random.random() &lt; 0.50:<br></br>
                    // flip image and steering angle to match flipped image<br></br>
                    image, angle = flipImgAndAngle(image, angle)<br></br>
                return image, angle<br></br>
            </code>
            </pre>
            <br></br>
            <h2>-Augmenter Functions-</h2>
            <br></br>
            <p>The augmenter functions themselves have zoom, brightness, and horizontal flip opperations. The reason for choosing only these two were because the image would end up with several null values or zero values when applying a pan for example. I did not see this being a real world issue and thought it was not worth having images that have a bunch of empty space for this project.
                All functions take in and return a single image. The images sent in are indexed from the driver function and when the 3 functions return they are appeneded to a temporary array to then be concatenated to the images array.
                <br></br><br></br><strong>The zoom function: </strong> <br></br>
                 </p>
                 <p> The zoom function has a range that increases the zoom to 1.1 upwards to 1.7x zoom. The reason it starts at one is to prevent adding zero values to the image. </p>
                 <pre>
            <code>
            def addZoom(image):<br></br>
  #didnt want zoom out so zoom scale is 1.1 to 1.7<br></br>
  aug = iaa.Affine(scale=(1.1,1.7))<br></br>
  newImage = aug.augment_image(image)<br></br>
  return newImage<br></br>
            </code>
            </pre>
            <br></br><strong>The brightness Function</strong><br>
            </br>
            <p>The brightness function has a range of 1.1 to 1.7. This means the image only gets brighter, this is sort of cheap and not great for real world testing, but my data and masks were working against me so I thought it was something I could ignore for the sake of the project. </p>
            <pre>
            <code>
            def addBrighter(image):<br></br>
  #Multiply all pixels in an image with a specific value, thereby making the image darker or brighter.<br></br>
  #i had it to where it would get darker too, but ultimately removed it due to<br></br>
  #the masking being messed up with opencv.<br></br>
  aug = iaa.Multiply((1.1, 1.7))<br></br>
  newImage = aug.augment_image(image)<br></br>
  return newImage<br></br>
            </code>
            </pre>
            <br></br>
        <strong>The flip function</strong>
        <br></br>
        <p>The flip augmentation actually takes in two arguements: steering angle and the image itself. The function will reverse the sign of the steering angle and produce a horizontal mirrored image.</p>
        <pre>
            <code>
            def flipImgAndAngle(image,angle):<br></br>
  #horizontal flip<br></br>
  newImage = cv2.flip(image,1)<br></br>
  newAngle = -angle<br></br>
  return newImage, newAngle<br></br>
            </code>
            </pre>
        <br></br>
        <strong>Random sample image of how each of independent methods work. The stohcastic function is not used. Orginal Steering angle is -30 (left turn). </strong>
        <br></br>
        <Carousel  showThumbs={false} >
        
                {augmentedEx.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index}  style={{ maxHeight: '400px', maxWidth: '300px'}}  />
                </div>
                ))}
            </Carousel>

            
            <h2>-Regularization-</h2>
        </div>
    )
}

export default MoreData;