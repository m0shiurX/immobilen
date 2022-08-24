import { loaded } from '../actions';
import { request, gql } from 'graphql-request';

const query = gql`
	query getProperties {
		immobilien(first: 30) {
			nodes {
				id
				link
				title
				imobilienFelder {
					addresse
					adresse {
						latitude
						longitude
					}
					grose
					immobilienTyp
					preis
					vdossier
					video
					zimmer
					gallerie {
						sourceUrl(size: MEDIUM)
					}
				}
			}
		}
	}
`;

const fetchListings = async (dispatch, getState) => {
	const listings = await request('https://staging.immoanker.ch/graphql', query).then((response) => response);
	dispatch(loaded(listings));
};

export default fetchListings;
