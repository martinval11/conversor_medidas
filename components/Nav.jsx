import { Navbar, Text } from '@nextui-org/react';
import { Layout } from './Layout.js';
import Image from 'next/image.js';

const Nav = () => {
	return (
		<>
			<div id='nav-desktop'>
				<Layout>
					<Navbar shouldHideOnScroll isBordered variant='sticky'>
						<Navbar.Brand>
							<Image src='/ruler.png' width='35px' height='35' alt='Balance Icon' />
							<Text b color='inherit' hideIn='xs'>
								Conversor de Medidas
							</Text>
						</Navbar.Brand>
					</Navbar>
				</Layout>
			</div>
		</>
	);
};

export default Nav;
