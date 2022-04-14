import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import React from "react";

const Сarousel = () => {
    return (
        <>
            <Swiper 
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: '.swiper-pagination',
                }} 
                navigation={{ 
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[Pagination, Navigation]} 
                className="mySwiper w-96"
            >
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>

                <div className="swiper-pagination">

                </div>
                
                <div className="swiper-button-next">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#ECF1F7"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929C12.6834 9.90237 13.3166 9.90237 13.7071 10.2929L17 13.5858C17.7811 14.3668 17.7811 15.6332 17 16.4142L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L15.5858 15L12.2929 11.7071Z" fill="#428BF9"/>
                    </svg>
                </div>

                <div className="swiper-button-prev">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#ECF1F7"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 18.2929C17.6834 18.6834 17.6834 19.3166 17.2929 19.7071C16.9024 20.0976 16.2692 20.0976 15.8787 19.7071L12.5858 16.4142C11.8047 15.6332 11.8047 14.3668 12.5858 13.5858L15.8787 10.2929C16.2692 9.90237 16.9024 9.90237 17.2929 10.2929C17.6834 10.6834 17.6834 11.3166 17.2929 11.7071L14 15L17.2929 18.2929Z" fill="#428BF9"/>
                    </svg>
                </div>
            </Swiper>
        </>
    )
}
  
export default Сarousel