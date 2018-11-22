import React from 'react';
import Link from 'next/link'

export default class App extends React.Component {

    render() {
        return (
            <React.Fragment>    
                <h1>Root Page</h1>
                <p><Link href="home" ><a>Test URL!</a></Link></p>
                <div>Testing this! </div>
            </React.Fragment>   
        )
    }
}