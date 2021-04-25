import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function IngredientCard({ name }) {

  console.log(name)
    return (
        <Row>
            <Col sm={3}>
                <img src="https://d2wtgwi3o396m5.cloudfront.net/ingredient/f0c89e7a-9fe4-4bc6-8444-a4dded9b3eee.png"
                    width="60px" height="60px"
                />
            </Col>
            <Col sm={9}>
                <div className="ingredient-text ml-0 pl-0 mt-3">
                    {name}
                </div>

            </Col>
        </Row>
    )
}
