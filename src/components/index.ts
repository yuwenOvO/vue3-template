import SvgIcon from './SvgIcon.vue';
import type { App } from 'vue';

export default {
	install(app: App) {
		app.component(SvgIcon.__name as string, SvgIcon);
	},
};
