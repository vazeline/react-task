import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// SETUP COLORS
const GREY = {
	0: '#FFFFFF',
	100: '#f5f5f5',
	200: '#F0F0F0',
	300: '#e0e0e0',
	400: '#B5B5B5',
	500: '#9e9e9e',
	600: '#757575',
	700: '#616161',
	800: '#424242',
	900: '#212121',
	500_8: alpha('#9e9e9e', 0.08),
	500_12: alpha('#9e9e9e', 0.12),
	500_16: alpha('#9e9e9e', 0.16),
	500_24: alpha('#9e9e9e', 0.24),
	500_32: alpha('#9e9e9e', 0.32),
	500_48: alpha('#9e9e9e', 0.48),
	500_56: alpha('#9e9e9e', 0.56),
	500_80: alpha('#9e9e9e', 0.8)
}

const PRIMARY = {
	lighter: '#D1E9FC',
	light: '#76B0F1',
	main: '#001340',
	dark: '#103996',
	darker: '#061B64',
	contrastText: '#fff'
}

const SECONDARY = {
	lighter: '#b5e9f7',
	light: '#85daf1',
	main: '#59CBE8',
	dark: '#31b6d9',
	darker: '#2ca7c6',
	contrastText: '#fff'
}

const INFO = {
	lighter: '#07b1ff',
	light: '#0d8fdf',
	main: '#0C5DA9',
	dark: '#0d4e8a',
	darker: '#0c3f6e',
	contrastText: '#fff'
}

const SUCCESS = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#54D62C',
	dark: '#229A16',
	darker: '#08660D',
	contrastText: GREY[800]
}

const WARNING = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#FFC107',
	dark: '#B78103',
	darker: '#7A4F01',
	contrastText: GREY[800]
}

const ERROR = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#FF0000',
	dark: '#B72136',
	darker: '#7A0C2E',
	contrastText: '#fff'
}

const YELLOW = {
	lighter: '#faeaaf',
	light: '#f6dc7a',
	main: '#F3D142',
	dark: '#f0ba00',
	darker: '#f1ac00',
	contrastText: '#fff'
}

const LIGHT_GREY = {
	lighter: '#c0c6d3',
	light: '#99a1b4',
	main: '#737d96',
	dark: '#001340',
	darker: '#1f305c',
	contrastText: '#fff'
}

const DARK_GREY = {
	lighter: '#e9e9e9',
	light: '#d9d9d9',
	main: '#B5B5B5',
	dark: '#6d6d6d',
	darker: '#595959',
	contrastText: '#fff'
}

const NAVY = {
	lighter: '#c0c6d3',
	light: '#99a1b4',
	main: '#001340',
	dark: '#737d96',
	darker: '#1f305c',
	contrastText: '#fff'
}

const BLUE = {
	light: '#E7EFF6',
	main: '#004eff',
	contrastText: '#fff'
}

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main)
}

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
}

const palette = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR },
	yellow: { ...YELLOW },
	lightGrey: { ...LIGHT_GREY },
	darkGrey: { ...DARK_GREY },
	navy: { ...NAVY },
	blue: { ...BLUE },
	grey: GREY,
	gradients: GRADIENTS,
	chart: CHART_COLORS,
	divider: GREY[500_24],
	text: { primary: '#000', secondary: GREY[600], disabled: GREY[500] },
	background: { paper: '#fff', default: GREY[100], neutral: GREY[200] },
	action: {
		active: GREY[600],
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48
	}
}

export default palette
