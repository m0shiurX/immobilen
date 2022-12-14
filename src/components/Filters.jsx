import { useSelector } from 'react-redux';

export default function Filters() {
	const listings = useSelector((state) => state.listings.listings);

	return (
		<div className='flex items-center justify-between pt-3 pb-5'>
			<div className='text-xl'> {listings.length} properties </div>
			<button className='flex items-center border-stone-300 border px-3 py-1 rounded-md'>
				{/* filter icon */}
				<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
					/>
				</svg>
				<span className='font-semibold ml-1'>Filters</span>
			</button>
		</div>
	);
}
