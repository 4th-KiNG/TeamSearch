import './Footer.css'
import {footer, sfedu, github, moodle} from '../assets'


function Footer() {
    return(
        <div className='footer'>
            <div className='linkbar'>
                <a href="https://edu.mmcs.sfedu.ru/"><img className='linkimg moodle' src={moodle} alt="" /></a>
                <a href="https://sfedu.ru"><img className='linkimg sfedu' src={sfedu} alt="" /></a>
                <a href="https://github.com/4th-KiNG/TeamSearch"><img className='linkimg github' src={github} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer;