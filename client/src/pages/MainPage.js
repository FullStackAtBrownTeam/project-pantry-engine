import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import UserIngredientBlock from '../components/UserIngredientBlock'
import RecipeBlock from '../components/RecipeBlock'

import { PantryContextProvider } from '../context/PantryContext'

export default function MainPage() {
  return (
    <PantryContextProvider>
      <Container className="mt-1 mx-5" fluid="xl">
        <Row>
          <UserIngredientBlock />
          <RecipeBlock />
        </Row>
      </Container>
    </PantryContextProvider>

  )
}