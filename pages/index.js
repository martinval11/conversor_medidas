import Head from 'next/head';
import { useState } from 'react';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import Nav from '../components/Nav';

import { Button, Spacer, Textarea } from '@nextui-org/react';

import Footer from '../components/Footer';

const Home = () => {
	const [message, setMessage] = useState('');
	const [firstValue, setFirstValue] = useState('milla');
	const [secondValue, setSecondValue] = useState('kilometro');
	const [dataConverted, setDataConverted] = useState('');

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const commify = (n) => {
		let parts = n.toString().split('.');
		const numberPart = parts[0];
		const decimalPart = parts[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return (
			numberPart.replace(thousands, '.') +
			(decimalPart ? `,${decimalPart}` : '')
		);
	};

	const mileToKm = (num) => {
		const value = num * 1.609;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Km`;
		setDataConverted(message);
	};

	const kmToMi = (num) => {
    const value = num / 1.609;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Mi`;
		setDataConverted(message);
	};

	const mToKm = (num) => {
    const value = num / 1000;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Km`;
		setDataConverted(message);
	};
  
  const mileToM = (num) => {
    const value = num * 1609;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} M`;
		setDataConverted(message);
	};

	const mToMile = (num) => {
    const value = num / 1609;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Mi`;
		setDataConverted(message);
	};
  
	const kmToM = (num) => {
    const value = num * 1000;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} M`;
		setDataConverted(message);
  };

  const convert = () => {
		if (firstValue === 'milla' && secondValue === 'kilometro') {
			mileToKm(message);
		} else if (
			(firstValue === 'kilometro' && secondValue === 'kilometro') ||
			(firstValue === 'milla' && secondValue == 'milla')
		) {
			return;
		} else if (firstValue === 'kilometro' && secondValue === 'milla') {
			kmToMi(message);
    } else if (firstValue === 'kilometro' && secondValue === 'metro') {
      kmToM(message)
    } else if (firstValue === 'metro' && secondValue === 'kilometro') {
      mToKm(message);
    } else if (firstValue === 'milla' && secondValue === 'kilometro') {
      mileToKm(message);
    } else if (firstValue === 'milla' && secondValue === 'metro') {
      mileToM(message)
    } else if (firstValue === 'metro' && secondValue === 'milla') {
      mToMile(message)
    }
	};

	const invert = () => {
		setFirstValue(secondValue);
		setSecondValue(firstValue);
	};

	return (
		<>
			<Nav />

			<Head>
				<title>Conversor de Medidas</title>
				<meta name='description' content='Conversor de Medidas' />
				<meta name='keywords' content='Convertir Medidas' />
				<link rel='icon' href='/ruler.png' />
			</Head>

			<div className='container'>
				<main>
					<div className='grid'>
						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setFirstValue(e.target.value)}
									value={firstValue}
								>
									<option value='milla'>Milla</option>
									<option value='kilometro'>Kilometro</option>
									<option value='metro'>Metro</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								color='warning'
								label='Masa a convertir'
								placeholder='Por ejemplo: 1'
								cols='30'
								rows='10'
								value={message}
								onChange={handleMessageChange}
							></Textarea>
						</div>

						<div id='invert-options-btn-container'>
							<Button
								id='invert-options-btn'
								title='Invertir'
								onPress={() => invert()}
								auto
							>
								<ArrowLeftRight />
							</Button>
						</div>

						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setSecondValue(e.target.value)}
									value={secondValue}
								>
									<option value='kilometro'>Kilometro</option>
									<option value='milla'>Milla</option>
									<option value='metro'>Metro</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								label='Resultado'
								cols='30'
								rows='10'
								readOnly
								value={dataConverted}
							></Textarea>
						</div>
					</div>
					<Spacer y={0.5} />
					<Button
						id='translate-btn'
						auto
						onPress={() => convert()}
					>
						Convertir
					</Button>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Home;
