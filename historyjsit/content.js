chrome.extension.sendRequest(
	{
		action: 'isEnabled'
	},
	function(response) {
		if ( response.result ) {
			var e;

			e = document.createElement('script');
			e.innerHTML = 'window.historyjsitNoAlert = true;';
			document.body.appendChild(e);

			e = document.createElement('script');
			e.setAttribute('src','https://gist.github.com/raw/919358/bookmark-helper.js');
			document.body.appendChild(e);
		}
	}
);
