import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from './logo.svg';

const App = () => {
	// [kiri -> getter, kanan -> setter]
	const [mobilSaya, setMobilSaya] = useState(0);
	const [namaMobil, setNamaMobil] = useState('');

	const linkRef = useRef(null);
	const goto = (ref) => {
		window.scrollTo({
			top: ref.offsetTop,
			left: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		if (mobilSaya > 0) {
			setNamaMobil('Toyota Alphard');
		} else {
			setNamaMobil('Honda Civic');
		}
	}, [mobilSaya]);

	return (
		<div className='App'>
			<header className='App-header'>
				<div onClick={() => goto(linkRef.current)}>
					<img src={logo} className='App-logo' alt='logo' />
				</div>
				<h5>Merek mobil : {namaMobil}</h5>
				<h1>Saya punya {mobilSaya} mobil</h1>
				<button
					onClick={() => setMobilSaya((prev) => prev + 1)}
					style={{ marginBottom: '10px' }}
				>
					tambah mobil
				</button>
				<button
					onClick={() => setMobilSaya((next) => next - 1)}
					disabled={mobilSaya <= 0}
				>
					kurangi mobil
				</button>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est
					perspiciatis ea, consequatur autem cum cupiditate officia odio earum
					provident incidunt et totam modi? Eos error neque asperiores id
					inventore facilis, commodi nisi deleniti sequi minus itaque aliquid?
					Praesentium ipsam ad dolorem autem eveniet. Soluta autem fuga porro
					est dolorum consectetur aperiam. Exercitationem atque dignissimos ipsa
					maiores sunt maxime voluptate voluptates, sequi reiciendis tenetur non
					quaerat nobis dicta sapiente rem laboriosam earum, similique neque
					fugit! Distinctio necessitatibus, maxime perferendis libero facere
					iure atque deserunt, minus repudiandae molestiae eum provident sequi
					quaerat, iste reiciendis veritatis? Consequuntur quos labore harum cum
					corporis?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea quam
					delectus, reiciendis ipsa vel assumenda reprehenderit similique
					deleniti, accusamus perspiciatis, id quasi sit! Sit quas, aut tempora
					debitis minus nemo est, commodi id magnam aperiam illo voluptates?
					Exercitationem expedita id maxime itaque iste, quia unde a rem
					doloribus quam aliquam incidunt architecto voluptatum nesciunt ipsa
					nobis officiis sapiente amet, tempore cumque officia! Quisquam
					repudiandae sequi pariatur iure, obcaecati quis voluptatum. Animi, aut
					dolorem sapiente perspiciatis tenetur et ea officia nostrum quod neque
					quos? Doloremque ipsam, placeat voluptate corporis excepturi saepe
					amet adipisci quis quo, quidem in ipsum voluptatibus quasi a
					asperiores, unde ad earum veritatis consectetur mollitia. Numquam
					nostrum, veniam provident illum excepturi voluptatem! Magnam,
					reprehenderit quaerat! Ipsam magnam, omnis recusandae ab fugiat in
					praesentium molestias nostrum alias harum rem voluptatum? Dicta
					tempore laboriosam reprehenderit nostrum asperiores aperiam rerum quod
					inventore consectetur nesciunt magni fugit beatae quidem laudantium
					ratione, culpa voluptatibus ducimus perspiciatis fuga excepturi
					aspernatur odio deserunt! Harum sunt molestiae veniam quis tempore
					aut, nisi, recusandae modi exercitationem quibusdam facilis sed iusto
					omnis perspiciatis illo iure dolorum explicabo esse architecto
					provident! Facere culpa amet totam. Aliquam, dolorum deleniti. Totam
					libero molestiae quos quia et voluptate officia illum provident?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
					asperiores. Officiis labore vel voluptates animi facilis doloribus
					sint recusandae. In praesentium tempora enim quam architecto dolor non
					itaque nam eos ducimus magnam maxime molestiae vel nesciunt voluptatem
					ad deleniti dignissimos repellat a quo quasi expedita id, quae harum.
					Est tempora aut neque corrupti magni maiores possimus quam maxime a
					suscipit iure eveniet quas, exercitationem eligendi dolores expedita
					vel facilis beatae voluptatem! Minima earum repellat perspiciatis quo
					eius deleniti hic similique. Obcaecati voluptate quas repellendus
					maxime ducimus dolores quod quae quasi, natus illum nihil! Tempora
					error odit voluptas sint explicabo nostrum praesentium, non dolorum
					optio ut mollitia, animi tempore iste harum tenetur nesciunt quaerat!
					Atque, voluptatibus exercitationem similique praesentium quasi ducimus
					maiores, id eaque recusandae culpa, expedita sint quod. Ex natus culpa
					odit dignissimos id harum repellat voluptas, et cum officiis.
					Adipisci, ratione eveniet dignissimos assumenda iure dolorum facilis
					sed delectus.
				</p>
				<button ref={linkRef}>Button Reff</button>
			</header>
		</div>
	);
};

export default App;
