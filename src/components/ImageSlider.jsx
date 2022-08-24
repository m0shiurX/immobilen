import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider({ images }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			className='h-full bg-slate-300'
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{images.map((image, index) => (
				<SwiperSlide className='bg-slate-400' key={'x' + index}>
					<img className='w-full object-cover object-bottom' src={image} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
