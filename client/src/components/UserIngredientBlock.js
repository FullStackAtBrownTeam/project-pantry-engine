import React from 'react'
import { Col } from 'react-bootstrap'
import SearchBarIngredient from './search_bars/SearchBarIngredient'
import UserPantry from './UserPantry'

// useContext to store ingredient array, 
// search bar can add to ingredient context
// pantry section can read from it 

export default function UserIngredientBlock() {
    return (
        <Col>
        <SearchBarIngredient/>
        <div className="block-title"> my pantry </div>
        
        <UserPantry/>

        </Col>

    )
}
