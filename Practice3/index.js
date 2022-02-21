import React from 'react'
import ReactDOM from 'react-dom'

import Nav from "./nav"
import MainContent from "./maincontent"

function Practice() {
    return (
        <div className="container">
            <Nav />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<Practice />, document.getElementById("root"))