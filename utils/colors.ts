const colors = {
	purple700: '#2E224C',
	purple600: '#453473',
	purple500: '#574191',
	purple400: '#7356BF',
	purple300: '#957FCE',
	purple200: '#C1B5E3',
	purple100: '#E3DDF2',
	purple50: '#F4F1FA',
	colbat700: '#000452',
	colbat600: '#000566',
	colbat500: '#0008A3',
	colbat400: '#101CFF',
	colbat300: '#4751FF',
	colbat200: '#949CE3',
	colbat100: '#C2C5FF',
	colbat50: '#EBEDFA',
	blue700: '#102C60',
	blue600: '#174291',
	blue500: '#1E54B7',
	blue400: '#276EF1',
	blue300: '#5B91F5',
	blue200: '#A0BFF8',
	blue100: '#D4E2FC',
	blue50: '#EFF3FE',
	green700: '#10462D',
	green600: '#03582F',
	green500: '#03703C',
	green400: '#05944F',
	green300: '#06C167',
	green200: '#66D19E',
	green100: '#ADDEC9',
	green50: '#E6F2ED',
	yellow700: '#674D1B',
	yellow600: '#997328',
	yellow500: '#BC8B2C',
	yellow400: '#FFC043',
	yellow300: '#FFCF70',
	yellow200: '#FFE3AC',
	yellow100: '#FFF2D9',
	yellow50: '#FFFAF0',
	red700: '#5A0A00',
	red600: '#870F00',
	red500: '#AB1300',
	red400: '#E11900',
	red300: '#E85C4A',
	red200: '#F1998E',
	red100: '#FED7D2',
	red50: '#FFEFED',
	brown700: '#3D281E',
	brown600: '#5C3C2E',
	brown500: '#744C3A',
	brown400: '#99644C',
	brown300: '#B18977',
	brown200: '#D2BBB0',
	brown100: '#EBE0DB',
	brown50: '#F6F0EA',
	grey900: '#121212',
	grey800: '#151718',
	grey700: '#2e2e2e',
	grey600: '#5C5C5D',
	grey500: '#737474',
	grey400: '#AEAFAF',
	grey300: '#cfd0d1',
	grey200: '#E6E7E8',
	grey100: '#f0f1f1',
	grey50: '#f8f8f8'
};

const blackAlpha = {
	blackAlpha100: 'rgba(0,0,0,100%)',
	blackAlpha88: 'rgba(0,0,0,88%)',
	blackAlpha72: 'rgba(0,0,0,72%)',
	blackAlpha56: 'rgba(0,0,0,56%)',
	blackAlpha40: 'rgba(0,0,0,40%)',
	blackAlpha30: 'rgba(0,0,0,30%)',
	blackAlpha20: 'rgba(0,0,0,20%)',
	blackAlpha16: 'rgba(0,0,0,16%)',
	blackAlpha10: 'rgba(0,0,0,10%)',
	blackAlpha8: 'rgba(0,0,0,8%)',
	black: '#000'
};

const whiteAlpha = {
	whiteAlpha88: 'rgba(255,255,255,88%)',
	whiteAlpha72: 'rgba(255,255,255,72%)',
	whiteAlpha64: 'rgba(255,255,255,64%)',
	whiteAlpha40: 'rgba(255,255,255,40%)',
	whiteAlpha20: 'rgba(255,255,255,20%)',
	whiteAlpha4: 'rgba(255,255,255,4%)',
	white: 'rgba(255,255,255,0)'
};

const primitives = { ...colors, ...blackAlpha, ...whiteAlpha };

const foundation = {
	primaryA: primitives.black,
	primaryB: primitives.white,
	negative: primitives.red400,
	warning: primitives.yellow500,
	positive: primitives.green400,
	accent: primitives.colbat400
};

const background = {
	backgroundPrimary: foundation.primaryB,
	backgroundSecondary: primitives.grey50,
	backgroundTertiary: primitives.grey100,
	backgroundInversePrimary: foundation.primaryA,
	backgroundInverseSecondary: primitives.grey800,
	backgroundAccent: foundation.accent,
	backgroundNegative: foundation.negative,
	backgroundPositive: foundation.positive,
	backgroundWarning: foundation.warning,
	backgroundLightAccent: primitives.colbat50,
	backgroundLightNegative: primitives.red50,
	backgroundLightPositive: primitives.green50,
	backgroundLightWarning: primitives.yellow50
};
const shadows = {
	shadowBlackAlpha8: `inset 0px -1px 0px ${blackAlpha.blackAlpha8}`,
	shadowBlackAlpha16: `inset 0px -1px 0px ${blackAlpha.blackAlpha16}`
};

const content = {
	contentPrimary: foundation.primaryA,
	contentSecondary: primitives.grey600,
	contentAccent: primitives.colbat400,
	contentTertiary: primitives.grey500,
	contentInversePrimary: foundation.primaryB,
	contentInverseSecondary: primitives.grey300,
	contentInverseTertiary: primitives.grey400
};

const border = {
	borderOpaque: primitives.grey200,
	borderTransparent: blackAlpha.blackAlpha8,
	borderSelected: foundation.primaryA,
	borderInverseOpaque: primitives.grey700,
	borderInverseTransparent: whiteAlpha.whiteAlpha20,
	borderInverseSelected: foundation.primaryB,
	borderStateDisabled: primitives.grey50,
	borderAccent: primitives.colbat400,
	borderAccentLight: primitives.blue200,
	borderNegative: primitives.red200,
	borderWarning: primitives.yellow200,
	borderPositive: primitives.green200
};

export const brand = {
	...primitives,
	...foundation,
	...background,
	...content,
	...border,
	...shadows
};
