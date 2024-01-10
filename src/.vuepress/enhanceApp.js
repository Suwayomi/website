import Element from "element-ui";
import VueMoment from "vue-moment";
import store from "./store";
import { setupTrackerOauthHandler } from "./TrackerOauthHandler";

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData, // site metadata
}) => {
	Vue.use(VueMoment);
	Vue.use(Element);
	Vue.mixin({ store });

	setupTrackerOauthHandler(router);
};
