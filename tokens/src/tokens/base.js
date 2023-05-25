const f = require('../utils/formatToken');

module.exports = {
	mark: {
		backgroundColor: f('transparent'),
		color: f('{color.brand.primary.main}')
	},
	section: {
		mobile: {
			paddingBlock: f('4rem'),
			paddingInline: f('1.5rem')
		},
		tablet: {
			paddingBlock: f('{section.mobile.paddingBlock}'),
			paddingInline: f('2rem')
		},
		desktop: {
			paddingBlock: f('7rem'),
			paddingInline: f('{section.tablet.paddingInline}')
		},
		widescreen: {
			paddingBlock: f('{section.desktop.paddingBlock}'),
			paddingInline: f('4rem')
		}
	}
};
