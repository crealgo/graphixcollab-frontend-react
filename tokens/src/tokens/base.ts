export default {
	mark: {
		backgroundColor: 'transparent',
		color: '{color.brand.primary.main}'
	},
	section: {
		mobile: {
			paddingBlock: '4rem',
			paddingInline: '1rem'
		},
		tablet: {
			paddingBlock: '{section.mobile.paddingBlock}',
			paddingInline: '2rem'
		},
		desktop: {
			paddingBlock: '7rem',
			paddingInline: '{section.tablet.paddingInline}'
		},
		widescreen: {
			paddingBlock: '{section.desktop.paddingBlock}',
			paddingInline: '4rem'
		}
	}
};
