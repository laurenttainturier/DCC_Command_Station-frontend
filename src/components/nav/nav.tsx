import React from 'react';
import {Link} from "react-router-dom";

import ReactIcon from "../../images/react.svg";


type NavProps = {
    activeUrl: string
}

const Nav: React.FunctionComponent<NavProps> = (props: NavProps) => (
    <nav>
        <NavElement link="fleet" image={ReactIcon} name="Fleet"/>
        <NavElement link="railway" image={ReactIcon} name="Railway"/>
    </nav>
);


type NavElementProps = {
    link: string
    image: string
    name: string
};

const NavElement: React.FunctionComponent<NavElementProps> = (props: NavElementProps) => (
    <Link to={props.link}>
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
    </Link>
);

export default Nav;
