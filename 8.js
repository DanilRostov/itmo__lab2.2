console.time('first');
console.time('second');
console.time('third');
setTimeout( () => {
	console.timeEnd('first');
	setTimeout( () => {
		console.timeEnd('second');
		setTimeout( () => {
			console.timeEnd('third');
		}, 10000);
	}, 7000);
}, 3000);
