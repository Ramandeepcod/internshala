import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <span>
                <h3>Earthly.</h3>
                <h2>Sustainable products at affordable prices</h2>
            </span>
            <section>
                <ul>
                    
                        <li>PRIVACY POLICY</li>
                    
                    
                        <li>TERM & CONDITION</li>
                    
                    
                        <li>ABOUT US</li>
                    
                    
                        <li>FAQ</li>
                    
                </ul>
                <div>
                    <FacebookIcon className={classes.icon}/>
                    <YouTubeIcon className={classes.icon}/>
                    <InstagramIcon className={classes.icon}/>
                </div>
                <p>© 2021 Earthly INC. All Rights Reserved. </p>
            </section>
        </footer>
    )
}

export default Footer