import { useState } from 'react';
import './css/SlidingPosters.css'
import p1 from './assets/sliding-posters/p1.jpeg'
import p2 from './assets/sliding-posters/p2.jpeg'
import p3 from './assets/sliding-posters/p3.jpeg'
import p4 from './assets/sliding-posters/p4.jpeg'
import p5 from './assets/sliding-posters/p5.jpeg'
import p6 from './assets/sliding-posters/p6.jpeg'
import p7 from './assets/sliding-posters/p7.jpeg'
import p8 from './assets/sliding-posters/p8.jpeg'
import p9 from './assets/sliding-posters/p9.jpeg'

const SlidingPosters = () => {

    const [isHovered, setIsHovered] = useState(false);
   
    const posterList = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
      
    const Image = ({src, alt, ...props}) => {
      return <img src={src} alt={alt} {...props} className='poster-img'/>
    }

    const handleMarqueeMouseEnter = () => setIsHovered(true)
    const handleMarqueeMouseLeave = () => setIsHovered(false)

    return (
        <div className="poster-container ">
            <div className="poster-heading">OUR WORKS</div>
            <div className="poster-wrapper">
                <div className="poster-marquee">
                    <div 
                        className={`marquee-group ${isHovered ? 'marquee-group-paused':''}`} 
                        onMouseEnter={handleMarqueeMouseEnter}
                        onMouseLeave={handleMarqueeMouseLeave}
                    >
                        {posterList.map((elem, index) => <Image src={elem} key={index} />)}
                    </div>
                    <div className={`marquee-group ${isHovered ? 'marquee-group-paused':''}`}>
                        {posterList.map((elem, index) => <Image src={elem} key={index + '-copy'} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlidingPosters;
