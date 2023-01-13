import React from 'react'
import "../css/Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>Copyright &Copy <span id="year"></span> <a className='footer-link' href="/login">@Kriti-Gulati</a> </p>
            </div>
        </footer>
    )
}

export default Footer