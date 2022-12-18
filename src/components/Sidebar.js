import {NavLink} from "react-router-dom";

const Sidebar = () => {

    return(
        <>
            <aside id="main-sidebar" className="main-sidebar">
                <ul className="nav-menu">
                    <li><NavLink to="/">Courses</NavLink></li>
                    <li><NavLink to="/lessons">Lessons</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar;