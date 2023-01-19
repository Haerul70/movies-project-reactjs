import { Container, Col, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='d-flex justify-content-center aling-items-center text-center text-white'>
                <Row>
                    <Col>
                        <div className='title'>WATCH FREE MOVIES</div>
                        <div className='title'>WITHOUT A TICKET</div>
                        <div className='introButton mt-4 text-center'>
                            <Button variant='dark'>OTHER LISTS</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Intro;