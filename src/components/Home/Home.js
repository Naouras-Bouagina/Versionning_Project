import React from 'react'
import { Carousel,Image } from 'antd';
import 'antd/dist/antd.css';
import slide01  from '../Home/images_slides/slide01.jpg'
import slide02  from '../Home/images_slides/slide02.jpg'
import slide03  from '../Home/images_slides/slide03.jpg'
import Product from './Product';
import Banner from './Banner';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home() {
  
    return (
      
        <>
         <Carousel autoplay>
            <div>
                <div className="item-slick1"  style={{ backgroundImage: `url(${slide01})` }} >
                    <div className="container h-full">
                            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div className="layer-slick1">
                                    <span className="ltext-101 cl2 respon2">
                                        Women Collection 20121
                                    </span>
                                </div>
                                    
                                <div className="layer-slick1">
                                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        NEW SEASON
                                    </h2>
                                </div>
                                    
                             
                                <div className="layer-slick1">
                                <Link to="/products">   
                                    <a className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"  style={{ color: 'white' }}>
                                        Shop Now
                                    </a>
                                    </Link>
                                </div>
                               
                            </div>
                        </div>
                </div>
                
            </div>
            <div>
                <div className="item-slick1"  style={{ backgroundImage: `url(${slide02})` }} >
                <div className="container h-full">
                            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div className="layer-slick1">
                                    <span className="ltext-101 cl2 respon2">
                                        Men New-Season
                                    </span>
                                </div>
                                    
                                <div className="layer-slick1">
                                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        Jackets & Coats
                                    </h2>
                                </div>
                                    
                                <div className="layer-slick1">
                                <Link to="/products">  
                                    <a className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" style={{ color: 'white' }}>
                                        Shop Now
                                    </a>
                                </Link>    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div className="item-slick1"  style={{ backgroundImage: `url(${slide03})` }} >
                <div className="container h-full">
                            <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div className="layer-slick1" >
                                    <span className="ltext-101 cl2 respon2">
                                        Men Collection 2021
                                    </span>
                                </div>
                                    
                                <div className="layer-slick1">
                                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        New arrivals
                                    </h2>
                                </div>
                                    
                                <div className="layer-slick1">
                                <Link to="/products">  
                                    <a className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04" style={{ color: 'white' }}>
                                        Shop Now
                                    </a>
                                 </Link>   
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </Carousel>
        <Banner/>
        <Product/>
      </>
    )
}

export default Home;
