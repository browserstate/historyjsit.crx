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
			e.setAttribute('src', '//rawgithub.com/browserstate/ajaxify/master/ajaxify-bookmarklet-helper.js');
			document.body.appendChild(e);
		}
	}
);
