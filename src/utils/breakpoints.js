export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

export const mediaQuery = {
  mobileMax: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tabletMax: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktopMin: `(min-width: ${BREAKPOINTS.desktop}px)`,
  finePointerDesktop: `(min-width: ${BREAKPOINTS.desktop}px) and (pointer: fine)`,
};