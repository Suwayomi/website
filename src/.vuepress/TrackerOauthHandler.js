const getStateFromQuery = (query) => {
	const urlParams = new URLSearchParams(query);
	return JSON.parse(urlParams.get("state"));
};

const getRedirectUrlFromQuery = (query = window.location.search) => {
	const { redirectUrl } = getStateFromQuery(query);

	if (!redirectUrl) {
		throw new Error("No redirectUrl found");
	}

	return `${redirectUrl}${query}`;
};

const getRedirectUrlFromHash = () => {
	const query = window.location.hash.replace("#", "?");
	return getRedirectUrlFromQuery(query);
};

const getRedirectUrl = () => {
	try {
		return getRedirectUrlFromQuery();
	} catch (e) {}

	return getRedirectUrlFromHash();
};

export const setupTrackerOauthHandler = (router) => {
	router.addRoute({
		path: "/tracker-oauth",
		beforeEnter() {
			console.log("TrackerOauthHandler::handle: location", window.location);

			try {
				window.location.href = getRedirectUrl();
			} catch (e) {
				console.log("TrackerOauthHandler::handle: redirecting back to the client failed due to", e);
			}
		},
	});
};
