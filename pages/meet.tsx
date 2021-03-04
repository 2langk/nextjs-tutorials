import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/meet/Layout';
import MeetItem from '../components/meet/MeetItem';
import NewMeetForm from '../components/meet/NewMeetForm';
import { LikesContextProvider } from '../components/meet/contexts/LikesContext';

interface Props {
	data: {
		id: string;
		title: string;
		image: string;
		address: string;
		description: string;
	}[];
}
const MeetPage: NextPage<Props> = ({ data: init }) => {
	const [data, setData] = useState(init);
	const [showAddForm, setShowAddForm] = useState(false);

	return (
		<LikesContextProvider>
			<Layout title="Meet">
				<h2 style={{ margin: '1rem 20%' }}>Meets</h2>
				<div style={{ margin: '1rem 20%' }}>
					<button onClick={() => setShowAddForm((prev) => !prev)}>{showAddForm ? 'Close' : 'Add New'}</button>
				</div>
				{showAddForm && <NewMeetForm setData={setData} />}
				<div style={{ margin: 'auto', padding: 0, width: '60%' }}>
					{data.map((meet) => (
						<MeetItem key={meet.id} meet={meet} />
					))}
				</div>
			</Layout>
		</LikesContextProvider>
	);
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const data = [
		{
			id: 'm1',
			title: 'This is a first meetup',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
			address: 'Meetupstreet 5, 12345 Meetup City',
			description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
		},
		{
			id: 'm2',
			title: 'This is a second meetup',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
			address: 'Meetupstreet 5, 12345 Meetup City',
			description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
		}
	];

	return {
		props: {
			data
		}
	};
};
export default MeetPage;
