import React from "react";

/* Components */
import {Providers} from '@/lib/providers'
import {NavBar} from './components/Nav'


// bootstrap style import
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/app/components/Footer";


export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <Providers>
            <html lang="en">
            <body>
            <NavBar/>
            <div className={'container'}>
                {props.children}
            </div>
            <Footer/>
            </body>
            </html>
        </Providers>
    )
}
