
import classes from './Products.module.css';
import StarRating from '../Rating/StarRating';
import { Divider } from '@material-ui/core';
import Timer from '../Timer/Timer';
import ProductAdd from '../ProductAdd/ProductAdd';
import img2 from './228E1B06-945F-43B3-9E48-FC5DB82AE615.svg';
import img3 from './icons8-visa.svg';
import img4 from './icons8-mastercard.svg';
import img5 from './icons8-apple_pay.svg';
import img6 from './Logo.png';

function Products(props) {
  
    return (
        <div className={classes.product}> 
           <p className={classes.lable} > 
                <span className={classes.readytoship}> Ready to ship </span> 
                    <span className={classes.instock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                        </svg> In Stock 
                    </span> 
                <span className={classes.fastdispatch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    Fast Dispatch 
                </span>  
            </p>
           <p className={classes.title}> 
                2021 hot selling GPS 5G quadcopter drone with camera remote 
                control aircraft drone WiFi mini drone camera 
                <span className={classes.hotsale} style={{ color: 'gray' }}>Hot sale product</span> 
            </p>
            
            {/* stars for rating  */}
            <StarRating/> <br/>

            <Divider/>
            <p>
                <span style={{ color: '#ff6600' }}> <strong>R 78.50 - R 895.31</strong></span><span style={{ color: 'gray' }}> /Option |</span> 2 Options (min.Order)
                <br/> <span style={{ color: 'gray' }}><del>R 98.12- R 1,119.14 </del></span>
            </p>
            <Divider/>
            
            <p className={classes.matchexpobox}>
                <img src={img6} alt='matchexpo' className={classes.matchexpoimg}/>
                <span className={classes.freeshipiing}>
                    &emsp; • Free shipping (up to $40) &emsp; • On-time delivery guaranteed &emsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                </span>
            </p>

            {/* //product add buttons for cart  */}
            <p> <span style={{ color: '#ff6600' }}>20% OFF</span><span style={{ color: 'gray' }}> Discount ends in </span></p>
            {/* <Timer/> */}
            <span style={{ color: 'gray'}}> Options: </span> &emsp; &emsp; &emsp; &nbsp; 1089P &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;R 833.99 
            <ProductAdd/>  <br/><br/>
            <span className={classes.options}> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;4K &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;R 895.31 
                <ProductAdd/> <br/><br/> 
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Battary(accessories) &emsp; &emsp; &emsp; &nbsp; &nbsp; R 78.50
                <ProductAdd/>
            </span>
            <p>
                <img src={img2} alt=''/> &nbsp;
                <span className={classes.trade}>Trade Assurance </span>
                <span  className={classes.protects}>protects your <a href="https://tradeassurance.alibaba.com/" >Alibaba.com</a> orders</span>
            </p>
            <p className={classes.payments}>
                Payments : <img src={img3} alt='' /> <img src={img4} alt='' /> <img src={img5} alt='' />  <br/> <br/>
               <a href="https://tradeassurance.alibaba.com/" >Alibaba.com</a> Logistics &emsp;&emsp; Inspection Sloutions
            </p>
        </div>
    )
}

export default Products
