import React from 'react'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpeg'
import pic5 from './pic5.jpg'

 const Slider = () => {
    return (
        <>
           
            <aside id="slider">
                <div id="slider1">
                    <figure>
                        <img src={pic1} alt="pic" width="300px" height="300px" />
                        <img src={pic2} alt="pic2" width="300px" height="300px"/>
                        <img src={pic3} alt="pic" width="300px" height="300px"/>
                        <img src={pic4} alt="pic" width="300px" height="300px" />
                        <img src={pic5} alt="pic" width="300px" height="300px" />
                    </figure>
                </div>
            </aside>
        </>
    )
}
export default Slider
