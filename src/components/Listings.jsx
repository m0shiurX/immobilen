import ListingCard from './ListingCard';
import { useSelector } from 'react-redux';

export default function Listings() {
	const listings = useSelector((state) => state.listings.listings);

	return (
		<div className='grid gap-6 grid-cols-1 phone:grid-cols-2'>
			{listings.map((listing) => (
				<ListingCard listing={listing} key={listing.id} />
			))}
		</div>
	);
}
