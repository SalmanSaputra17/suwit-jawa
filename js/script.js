
function getPilihanKomputer() {
	
	const comp = Math.random();
	if ( comp < 0.34 ) return 'gajah';
	if ( comp >= 0.34 && comp < 0.67  ) return 'orang';
	return 'semut';

}

function getHasil(comp, player) {

	if ( player == comp ) return 'SERI';
	if ( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
	if ( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH' : 'MENANG';
	if ( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG';

}

function putarGambar() {

	const imgKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	const waktuMulai = new Date().getTime();
	let i = 0;

	setInterval(function() {
		if ( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}
		imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if ( i == gambar.length ) i = 0;
	}, 100);

}

const pilihGambar = document.querySelectorAll('li img');
pilihGambar.forEach(function(pilih) {
	pilih.addEventListener('click', function() {

		const pilihanKomputer = getPilihanKomputer();
		const pilihanPlayer = pilih.className;
		const hasil = getHasil( pilihanKomputer, pilihanPlayer );

		putarGambar();

		setTimeout(function() {
			const imgKomputer = document.querySelector('.img-komputer');
			imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);

	});
});



