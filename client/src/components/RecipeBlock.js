import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchBarRecipe from "./search_bars/SearchBarRecipe.js";
import RecipeCard from "./cards/RecipeCard.js";

class RecipeBlock extends Component {
    render() {
        return (
            <Col>
                <Row>
                    <SearchBarRecipe></SearchBarRecipe>
                </Row>
                <Row></Row>
                <Row>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                </Row>
            </Col>
        );
    }
}

export default RecipeBlock;