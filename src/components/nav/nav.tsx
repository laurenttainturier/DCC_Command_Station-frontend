import React from 'react';
import {Link} from "react-router-dom";

import './nav.css'

import ClockIcon from '../../components/icons/clock';
import RailIcon from '../../components/icons/rail';
import SettingsIcon from '../../components/icons/settings';
import StationIcon from "../icons/station";
import TrainIcon from "../icons/train";


const Nav: React.FC = () => (
    <nav className="Nav">
        <NavElement link="/station" image={StationIcon} name="Station"/>
        <NavElement link="/train" image={TrainIcon} name="Train"/>
        <NavElement link="/railway" image={RailIcon} name="Railway"/>
        <NavElement link="/itinerary" image={ClockIcon} name="Itinerary"/>
        <NavElement link="/settings" image={SettingsIcon} name="Settings"/>
    </nav>
);


type NavElementProps = {
    link: string
    image: any
    name: string
};

const NavElement: React.FunctionComponent<NavElementProps> = (props: NavElementProps) => (
    <Link to={props.link} className={"NavElement " + (window.location.pathname === props.link ? "active" : "")}>
        <props.image/>
        <p className="text">{props.name}</p>
    </Link>
);

export default Nav;
