let btn = document.querySelector('#btn');
let noti = document.querySelectorAll('.noti');
let notify = document.querySelector('notify');
let notice = document.querySelector('.notice');
let read = document.querySelectorAll('.unread');
let dot = document.querySelectorAll('.dot');
let noti1 = document.querySelector('.noti1');

btn.addEventListener('click', result);

let count = read.length;

function manageCount(count) {
	notice.innerText = count;
}
function manageDot(dot) {
	dot.classList.remove('dot');
}

function result() {
	for (i = 0; i <= read.length; i++) {
		read[i].classList.remove('unread');
		dot[i].classList.remove('dot');
		count = 0;
		manageCount(count);
	}
}

noti.forEach((reed) => {
	reed.addEventListener('click', () => {
		reed.classList.remove('unread', 'dot');

		count--;
		if (count < 1) {
			count = 0;
		} else {
			count = count;
		}
		manageCount(count);
	});
});
