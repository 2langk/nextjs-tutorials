import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

interface Props {
	launch: {
		mission: string;
		site: string;
		timestamp: number;
		rocket: string;
	};
}

const IndexPage: NextPage<Props> = ({ launch }) => {
	const date = new Date(launch.timestamp);
	return (
		<Layout title="index" keywords="sdasdas">
			<>
				<h1>Next SpaceX Launch: {launch.mission}</h1>
				<p>
					{launch.rocket} will take off from {launch.site} on {date.toDateString()}
				</p>
			</>
			<div>
				<Link href="/todo">
					<a style={{ margin: '2rem' }} href="#">
						See Todos
					</a>
				</Link>

				<Link href="/meet">
					<a style={{ margin: '2rem' }} href="#">
						See Meet
					</a>
				</Link>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
	const response = await fetch('https://api.spacexdata.com/v3/launches/next');
	const nextLaunch = await response.json();

	return {
		props: {
			launch: {
				mission: nextLaunch.mission_name,
				site: nextLaunch.launch_site.site_name_long,
				timestamp: nextLaunch.launch_date_unix * 1000,
				rocket: nextLaunch.rocket.rocket_name
			}
		}
	};
};

export default IndexPage;
