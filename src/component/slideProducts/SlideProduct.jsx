import Product from "./Product";
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
function SlideProduct({ data, title }) {

    return (
        <>
            <div className="slide_products slide">
                <div className="container top">
                    <div className="top_slide">
                        <h2>{title}</h2>
                        <p>Add bestselling products to weekly line up</p>
                    </div>

                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={5}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper">
                        {
                            
                            data.map((item) => (
                                
                                    <SwiperSlide><Product item={item} /></SwiperSlide>

                                
                            ))
                        }


                    </Swiper>
                </div>

            </div>
        </>
    );
}

export default SlideProduct;