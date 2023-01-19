import { Container, Row, Col, Card, Image } from "react-bootstrap";
import startWarImage from "../assets/images/trending/star-wars.jpg"
import cyclopsImage from "../assets/images/trending/cyclops.jpg"
import stormImage from "../assets/images/trending/storm.jpg"
import justiceLeagueImage from "../assets/images/trending/jl.jpg"
import visionImage from "../assets/images/trending/vision.jpg"
import hulkIronmanImage from "../assets/images/trending/hulk-vs-ironman.jpg"
const Trending = () => {
  return (
    <div>
        <Container>
            <br></br>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <br></br>
            <Row>
                <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">
                        <Image src= {startWarImage} alt="Start War Movies" className="images" />
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
                        <Image src= {cyclopsImage} alt="Cyclops Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">CYCLOPS</Card.Title>
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
                        <Image src= {stormImage} alt="Storm Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">STORM</Card.Title>
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
                        <Image src= {justiceLeagueImage} alt="Justice League Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">JUSTICE LEAGUE</Card.Title>
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
                        <Image src= {visionImage} alt="Vision Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">VISION</Card.Title>
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
                        <Image src= {hulkIronmanImage} alt="Hulk Vs Ironman Movies" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">HULK VS IRONMAN</Card.Title>
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

export default Trending;