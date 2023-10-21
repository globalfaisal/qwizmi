import localFont from 'next/font/local';

export const monoSans = localFont({
  src: [
    {
      path: '../fonts/MonaSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MonaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/MonaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/MonaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/MonaSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mona-sans',
});
