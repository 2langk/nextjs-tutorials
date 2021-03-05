import { Flex, Box, Text, Image, Button, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { PhoneIcon } from '@chakra-ui/icons';
import { useCallback, useState } from 'react';
import Meta from '../components/Meta';

const MyPage: NextPage = () => {
	const [showModal, setShowModal] = useState(false);

	const modalHandler = useCallback(() => setShowModal((prev) => !prev), []);

	return (
		<>
			<Meta title="My Todos" />
			<Box h={{ base: '10', md: '28' }} w="full" bg="black" />
			<Box bgColor="gray.100">
				<Flex
					direction="column"
					roundedTop="xl"
					border="1px"
					borderColor="gray.100"
					alignItems={{ md: 'center' }}
					maxWidth="6xl"
					mx="auto"
					bgColor="white"
					zIndex="auto"
					mt={{ md: '-10' }}
				>
					<Flex justify="space-between">
						<Image
							borderRadius="full"
							boxSize={{ base: '80px', md: '120px' }}
							src="https://bit.ly/sage-adebayo"
							alt="Segun Adebayo"
							mt="-8"
							ml="5"
						/>
						<Button colorScheme="teal" size="md" m="4">
							Follow
						</Button>
					</Flex>
					<Box>
						<Heading as="h3" size="xl" m="3">
							Segun Adebayo
						</Heading>
					</Box>
					<Box>
						<Text ml="3">
							Front end Developer 🔥 || Youtuber 🎬|| Blogger ✍|| K-pop fan ❤️️based in Dhaka, Bangladesh.
						</Text>
					</Box>
					<Box display={{ md: 'flex' }}>
						<Flex mt="5" alignItems="center">
							<Box ml="3">
								<PhoneIcon mr="1" /> Dhaka, Bangladesh
							</Box>
							<Box ml="3">
								<PhoneIcon mr="1" /> Joined on 2020.10.24
							</Box>
							<Box ml="3">
								<PhoneIcon mr="1" /> test@test.com
							</Box>
						</Flex>
						<Box mt="5">
							<PhoneIcon mr="1" ml="3" />
							<PhoneIcon mr="1" ml="3" />
							<PhoneIcon mr="1" ml="3" />
							<PhoneIcon mr="1" ml="3" />
							<PhoneIcon mr="1" ml="3" />
							<PhoneIcon mr="1" ml="3" />
						</Box>
					</Box>
					<Flex justify="center" my="10">
						<Box mx={{ base: 'auto', md: '10' }}>
							<Text display="block">Education</Text>
							<Text display="block">North South University</Text>
						</Box>
						<Box mx="auto">
							<Text display="block">Work</Text>
							<Text display="block">Front End Developer at self-employed</Text>
						</Box>
					</Flex>
					<Box display={{ md: 'none' }} mx="auto" mb="5">
						<Button colorScheme="teal" width="100%" px="5" py="3" onClick={modalHandler}>
							{!showModal ? 'More Info about Segun Adebayo' : 'Close Info'}
						</Button>
					</Box>
				</Flex>

				<Flex justify="center" maxW="6xl" w="full" mx="auto" my="5" direction={{ base: 'column', md: 'row' }}>
					<Flex
						direction="column"
						px="3"
						display={{ base: `${showModal ? 'block' : 'none'}`, md: 'block' }}
						mr="3"
						ml="auto"
						w={{ base: '100%', md: '25%' }}
						bgColor="gray.100"
					>
						<Box bgColor="white" my="5" border="1px" borderColor="gray.100" rounded="md">
							<Text p="3" borderBottom="1px" borderColor="gray.100">
								Badges
							</Text>
							<Box boxSize="40x">
								<Image
									src="https://res.cloudinary.com/practicaldev/image/fetch/s--LBduLDHs--/c_limit,f_auto,fl_progressive,q_80,w_180/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/18/57795357-be29b880-7713-11e9-9748-b08c782b58d7.png"
									alt="Segun Adebayo"
								/>
							</Box>
						</Box>
						<Box bgColor="white" mb="5" border="1px" borderColor="gray.100" rounded="md">
							<Text p="3" borderBottom="1px" borderColor="gray.100">
								Skills
							</Text>
							<Text p="3">HTML, CSS, Javascript</Text>
						</Box>
						<Box bgColor="white" mb="5" border="1px" borderColor="gray.100" rounded="md">
							<Text p="3" borderBottom="1px" borderColor="gray.100">
								Available For
							</Text>
							<Text p="3">Work / collaboration Just dm me</Text>
						</Box>
						<Box bgColor="white" mb="5" border="1px" borderColor="gray.100" rounded="md">
							<Text p="3">10 posts published</Text>
							<Text p="3">49 comments written</Text>
							<Text p="3">14 tags followed</Text>
						</Box>
					</Flex>
					{/* Post */}
					<Flex
						direction="column"
						p="5"
						border="1px"
						borderColor="teal"
						mx="auto"
						rounded="md"
						w={{ base: '100%', md: '75%' }}
					>
						{[1, 1, 1, 1, 1].map((i) => (
							<Box mb="3" bgColor="white" p="5">
								<Flex alignItems="center">
									<Image
										borderRadius="full"
										boxSize="10"
										src="https://bit.ly/sage-adebayo"
										alt="Segun Adebayo"
										mr="1"
									/>
									<Box>
										<Text>Joy</Text>
										<Text>Mar 4</Text>
									</Box>
								</Flex>
								<Heading as="h5" size="md" my="3">
									CSS Grid Cheat Sheet Illustrated in 2021🎖️
								</Heading>
								<Flex>
									<a href="">#css </a>
									<a href="">#css </a>
									<a href="">#css </a>
									<a href="">#css </a>
								</Flex>
								<Flex direction="row" justify="space-between" alignItems="center">
									<Flex alignItems="center">
										<Box mr="1">♥ 481 reactions</Box>
										<Box mr="1">♥ 23 comments</Box>
									</Flex>
									<Flex alignItems="center">
										<Text mr="1">5 min read</Text>
										<Button colorScheme="teal" size="sm">
											Save
										</Button>
									</Flex>
								</Flex>
							</Box>
						))}
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
// 	const todos = [
// 		{ title: 'todos1', id: 1 },
// 		{ title: 'todos2', id: 2 },
// 		{ title: 'todos3', id: 3 },
// 		{ title: 'todos4', id: 4 }
// 	];

// 	return {
// 		props: {
// 			todos
// 		}
// 	};
// };

export default MyPage;
