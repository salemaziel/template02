import React from 'react'
//import {} from 'reactstrap';
import Pic1 from '../assets/images/pic01.jpg'
import Pic2 from '../assets/images/pic02.jpg'
import Pic3 from '../assets/images/pic03.jpg'
//import Pic4 from '../assets/images/pic04.jpg'
import Pic5 from '../assets/images/pic05.jpg'

  const Gallery2 = () => {
    return (
        <div style={{

            padding: '2rem 0 3rem',
            
        }}>
            {/**<h4>Gallery Title</h4>**/}
				
							{/**<span class="image fit"><img src="images/banner.jpg" alt="" /></span>**/}
							<div class="box alt">
								<div class="row gtr-50 gtr-uniform">
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic1} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic2} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic3} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic2} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic3} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic1} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic3} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic1} alt="" /></span></a></div>
									<div class="col-6"><a href="#"><span class="image fit"><img src={Pic2} alt="" /></span></a></div>
                                    <div class="col-6"><a href="#"><span class="image fit"><img src={Pic1} alt="" /></span></a></div>
								</div>
							</div>
							{/**<h5> Text Title</h5>**/}
							<p><span class="image left"><img src={Pic5} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</p>
							<p><span class="image right"><img src={Pic5 }alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. </p>
        </div>
        );
    };
    
    export default Gallery2