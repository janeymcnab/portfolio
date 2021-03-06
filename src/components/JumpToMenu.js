import { Link } from 'react-scroll';

const JumpToMenu = () =>{
    return(
        <>
        <div className="container-jump-menu">
            <h3>Go to...</h3>

            <ul className="jump-menu">
                <li className="list-item"><Link activeClass="active" to="About Me" spy={true} smooth={true}>About Me</Link></li>
                <li className="list-item"><Link activeClass="active" to="Portfolio" spy={true} smooth={true}>Portfolio</Link></li>
                <li className="list-item"><Link activeClass="active" to="Contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>

        </div>
        </>
    )
}

export default JumpToMenu;