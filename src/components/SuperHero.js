import { Container, Row, Col, Card, Image } from "react-bootstrap";
import aquamanImage from "../assets/images/superhero/aquaman.jpg"
import avengersImage from "../assets/images/superhero/avengers.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import starWarsImage from "../assets/images/superhero/star-wars.jpg"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import venomImage from "../assets/images/superhero/venom.jpg"
const SuperHero = () => {
  return (
    <div>
        <Container>
            <br></br>
            <h1 className="text-white">SUPER HERO MOVIES</h1>
            <br></br>
            <Row>
                <Col md={4} className="movieWrapper" id="superHero">
                    <Card className="movieImage">
                        <Image src= {aquamanImage} alt="Aquaman Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AQUAMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src= {avengersImage} alt="Avengers Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVENGERS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src= {batmanImage} alt="Batman Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BATMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src= {starWarsImage} alt="Star Wars Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">STAR WARS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src= {spidermanImage} alt="Spiderman Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src= {venomImage} alt="Venom Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">VENOM</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SuperHero;