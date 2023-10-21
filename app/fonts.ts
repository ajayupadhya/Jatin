import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../public/fonts/TAN-PEARL.ttf' })

export const raleway_display = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable:"--font-raleway"
})


export const tan_pearl = myFont