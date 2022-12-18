import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";

const Common = () => {
    return(
        <>
            <Container fluid>
                <Sidebar/>
                <main className="main-content" role="main">
                    <Container>
                        <Outlet/>
                    </Container>
                </main>
            </Container>
        </>
    )
}

export default Common;