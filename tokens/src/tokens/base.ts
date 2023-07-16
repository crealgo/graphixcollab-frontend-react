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
			paddingBlock: '4rem',
			paddingInline: '2rem'
		},
		desktop: {
			paddingBlock: '4rem',
			paddingInline: '2rem'
		},
		widescreen: {
			paddingBlock: '{section.desktop.paddingBlock}',
			paddingInline: '4rem'
		}
	}
};
