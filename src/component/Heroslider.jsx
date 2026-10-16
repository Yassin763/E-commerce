import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Heroslider() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <Swiper 
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the new</h4>
                                <h3>Microsoft Xbox <br />     360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to='/' className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero1.jpg" alt="banner" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the new</h4>
                                <h3>Microsoft Xbox <br />     360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to='/' className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero2.jpg" alt="banner" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="content">
                                <h4>introducing the new</h4>
                                <h3>Microsoft Xbox <br />     360 Controller</h3>
                                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                                <Link to='/' className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero3.jpg" alt="banner" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Heroslider;