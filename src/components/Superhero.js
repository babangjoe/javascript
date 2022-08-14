import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import imageAvengers from '../assets/images/superhero/avengers.jpg'
import imageSpiderman from '../assets/images/superhero/spiderman.jpg'
import imageThor from '../assets/images/superhero/thor.jpg'
import imageSuperman from '../assets/images/superhero/superman-returns-2006.jpg'

const SuperHero = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className='text-white'>SUPERHERO MOVIES</h1>
                <br />             
                <Row>
                    <Col md={4} className='movieWrapper' id='superhero'>
                        <Card className="movieImage">
                            <Image src={imageAvengers} alt="Avengers Movie" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>AVENGERS</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={imageSpiderman} alt="Spiderman Movie" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={imageThor} alt="Thor Movie" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>THOR</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={imageSuperman} alt="Superman Return 2006 Movie" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>SUPERMAN RETURN 2006</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>        
        </div>
        
        
    )
}

export default SuperHero