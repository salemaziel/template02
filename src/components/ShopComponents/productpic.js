import React from 'react'
import Pic1 from '../assets/images/pic01.jpg'
import { AddToCart } from 'react-snipcart'
                                   

class Productpic extends React.Component {
    render() {
        return (  
           <>            
            <a href="#">						
				<span class="image fit">
				<AddToCart data={{
		id: '13',
		name: 'Test Product',
		url: '/#',
		price: '499.99',
		openCart: true,
	}}>
	Add to Cart
</AddToCart>
					<img src={Pic1} alt="" button
                    		                className='snipcart-add-item buyBtn'
                    						data-item-id="1"
                    						data-item-price="11"
                    						data-item-image={Pic1}
                    						data-item-name= "Product Name"
                    						data-item-description= "Description"
                    						data-item-url={"https://snipcart-gatsby.netlify.com"}>
				    </img>
													
				</span>
			</a>
           </> 
        )
    }
}

export default Productpic
