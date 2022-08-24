import { MapContainer, TileLayer, Popup, Marker, Tooltip, Circle } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import { useSelector } from 'react-redux';
import PopupCard from './PopupCard';
export default function Map() {
	const listings = useSelector((state) => state.listings);

	return (
		<MapContainer className='w-full h-full' center={[46.3769, 8.5417]} zoom={7} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>

			<MarkerClusterGroup>
				{listings.map((listing) => (
					<div key={listing.id}>
						<Marker position={[listing.location.lat, listing.location.long]} key={listing.id}>
							<Tooltip
								position={[listing.location.lat, listing.location.long]}
								className='bg-sky-100 border border-sky-900 drop-shadow-2xl'
								direction='top'
								offset={[-15, 26]}
								opacity={1}
								permanent
							>
								<div className='text-base font-semibold'>{listing.showing_price}</div>
								<Popup className='m-0'>
									<PopupCard
										images={listing.images}
										location={listing.location.name}
										currency={listing.currency}
										price={listing.asking_price}
										rooms={listing.room}
										space={listing.space}
									/>
								</Popup>
							</Tooltip>
						</Marker>
					</div>
				))}
			</MarkerClusterGroup>
		</MapContainer>
	);
}
