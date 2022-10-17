const fonts = [`'Lexend'`, `'Helvetica Neue'`, 'Arial', 'sans-serif'].join(',')

const typography = {
	fontFamily: fonts,
	fontStyle: 'normal',
	color: '#000000',
	hero: {
		fontWeight: '700px',
		fontSize: '53px',
		lineHeight: '66px',
		letterSpacing: '2px'
	},
	h1: {
		fontWeight: '500',
		fontSize: '48px',
		lineHeight: '60px'
	},
	h2: {
		fontWeight: '500',
		fontSize: '36px',
		lineHeight: '45px'
	},
	h3: {
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '36px'
	},
	h4: {
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '20px'
	},
	h5: {
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '150%'
	},
	h6: {
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '150%'
	},
	body1: {
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '20px'
	},
	bigSub: {
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '150%'
	},
	button: {
		fontWeight: '600',
		fontSize: '12px',
		lineHeight: '15px',
		letterSpacing: '2px',
		textTransform: 'uppercase'
	},
	link: {
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '20px',
		textDecorationLine: 'underline'
	},
	overline: {
		fontWeight: '700',
		fontSize: '14px',
		lineHeight: '18px',
		letterSpacing: '5px',
		textTransform: 'uppercase'
	},
	bigParagraph: {
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '20px'
	},
	bigParagraphBold: {
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '20px'
	},
	paragraph: {
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '18px'
	},
	paragraphBold: {
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '18px'
	},
	smallParagraph: {
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '15px'
	},
	smallParagraphBold: {
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '15px'
	}
}

export default typography
