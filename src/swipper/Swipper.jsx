import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';

const Swipper = () => {
  return (
    <>
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/13HfFTS4/photo-2024-04-08-22-28-24.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide> <img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/HksMs5cq/photo-2024-04-08-22-28-30.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/mrj61787/photo-2024-04-08-22-28-31.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/7PJ8dQKc/photo-2024-04-08-22-28-32.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img className='lg:w-full lg:h-[550px] mt-5' src="https://i.postimg.cc/zGVnFKzn/photo-2024-04-08-22-28-34.jpg" alt="" /> </SwiperSlide>
      
    </Swiper>
  </>
  );
};

export default Swipper;

