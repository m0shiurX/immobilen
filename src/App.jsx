import { useState, useEffect } from 'react';
import Map from './components/Map';
// import useWindowDimensions from './hooks/useWindowDimensions';
import { useDispatch } from 'react-redux';
import Filters from './components/Filters';
import Listings from './components/Listings';
import Pagination from './components/Pagination';
import fetchListings from './redux/listings/thunk/fetchListings';

function App() {
	const [toggleList, setToggleList] = useState(true);
	// const { width } = useWindowDimensions();
	const showList = () => {
		setToggleList(() => !toggleList);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchListings);
	}, [dispatch]);

	return (
		<main className='relative laptop:grid laptop:grid-cols-2 desktop:grid-cols-3 w-full min-h-screen min-w-min'>
			{/* Map with leaflet js */}
			<div className='bg-sky-200 min-h-fit h-screen grid place-items-center w-100 fixed laptop:w-1/2 desktop:w-2/3 top-0 left-0 right-0'>
				<Map />
			</div>

			{/* Properties listing */}
			{toggleList && (
				<div className='p-6 rounded-t-3xl laptop:col-start-2 laptop:col-span-2 desktop:col-start-3 tablet:rounded-none min-h-screen absolute tablet:top-0 top-[55%] bg-white w-full'>
					<Filters />
					<Listings />
					<Pagination />
				</div>
			)}

			{/* Toggle button in tablet mode */}
			<div className='hidden tablet:flex laptop:hidden justify-center fixed bottom-12 left-0 w-full z-10'>
				<button onClick={showList} className='flex items-center gap-x-2 text-xl bg-lime-900 text-white py-2.5 px-5 rounded-xl '>
					<span>{toggleList ? 'Show Map' : 'Show Listings'}</span>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
						/>
					</svg>
				</button>
			</div>
		</main>
	);
}

export default App;
