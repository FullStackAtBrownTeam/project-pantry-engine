import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap'
import SelectSearch from 'react-select-search';

class SearchBarRecipe extends Component {
    render() {
        return (
            <Form className="mt-4">
                <Form.Group as={Row}>
                    <Form.Control className="recipe-search-bar mx-5" placeholder="search for recipes"/> 
                </Form.Group>
    
            </Form>
        );
    }
}

export default SearchBarRecipe;