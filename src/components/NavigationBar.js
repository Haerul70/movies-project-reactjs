import { Navbar, Container, Nav} from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container className="text-white">
                <Navbar.Brand>THEMOVIES</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superHero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar