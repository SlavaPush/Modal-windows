let btn = document.querySelector('.btn'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

function openModal(el) {
	el.addEventListener('click', function () {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
}

openModal(btn);

close.addEventListener('click', function () {
	overlay.style.display = 'none';
	document.body.style.overflow = '';
});
