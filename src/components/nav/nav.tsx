import React from 'react';
import {Link} from "react-router-dom";

import ReactIcon from "../../images/react.svg";


const Nav: React.FC = () => (
    <nav>
        <NavElement link="/fleet" image={ReactIcon} name="Fleet"/>
        <NavElement link="/railway" image={ReactIcon} name="Railway"/>
        <NavElement link="/about" image={ReactIcon} name="About"/>
        <NavElement link="/" image={ReactIcon} name="Home"/>
    </nav>
);


type NavElementProps = {
    link: string
    image: string
    name: string
};

const NavElement: React.FunctionComponent<NavElementProps> = (props: NavElementProps) => (
    <Link to={props.link} className={window.location.pathname === props.link ? "active" : ""}>
        {/*<img src={props.image} alt=""/>*/}
        <p>{props.name}</p>
    </Link>
);

export default Nav;
