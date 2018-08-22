// This file is for serviceworker registration

//if (!serviceWorker in navigator) return;

if ('serviceWorker' in navigator) { 
	navigator.serviceWorker.register('/sw.js').then((reg) => {
			console.log('Success!! Serviceworker registered');
		})
		.catch((err) => {
			console.log('Fail!! Serviceworker not registered');
			}
	)};