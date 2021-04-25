import React from 'react';
import { Card, Row, Col, Image, ListGroup, Modal, Button } from 'react-bootstrap';

function RecipePreview(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="recipe-preview-name">
                    recipe name
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Image className="recipe-preview-image" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" />
                </Row>
                <Row className="recipe-preview-text">
                    <h2>in my pantry</h2>
                    <p>eggs, tomatoes, peppers, onions, jalapeños</p>
                    <h2>i need</h2>
                    <p className="ingredients-missing">paprika, sour cream, pita bread</p>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default function RecipeCard() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Card className="recipe-card floating" onClick={() => setModalShow(true)}>
                <Card.Body className="p-0">
                    <Row className="m-0">
                        <Col xs={5} className="m-0 p-2">
                            <Image className="recipe-card-image" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" />
                        </Col>
                        <Col className="m-0 p-2">
                            <Card.Title>recipe name</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="ingredients-possessed">eggs, tomatoes, peppers, onions, anchovies</ListGroup.Item>
                                <ListGroup.Item className="ingredients-missing">paprika, sour cream, pineapple</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <RecipePreview
                className="recipe-preview"
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}