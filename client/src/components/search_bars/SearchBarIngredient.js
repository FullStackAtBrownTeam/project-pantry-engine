import React, { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'
// import SelectSearch from 'react-select-search';
import Select from 'react-dropdown-select'
import { data } from '../../data/Ingredients'

import { usePantryContext } from '../../context/PantryContext'


export default function SearchBarIngredient() {

  const { pantry, setPantry } = usePantryContext()

  const ingrArr = data.split("\n")

  let options = []

  for (let ingr of ingrArr) {
    options = [...options, {label: ingr}]

  }



    return (

      <Select options={options} 
      onChange={(ingr) => setPantry(pantry.concat(ingr))} placeholder="search for ingredients"/>

      // <SelectSearch options={options} autoComplete="on" search={true} name="ingredients" placeholder="search for ingredients" />
        // <Form className="mt-4">
        //     <Form.Group as={Row}>
        //         <Form.Control className="ingredient-search-bar embedded rounded-pill mx-5" placeholder="search for ingredients"/> 
        //     </Form.Group>

        // </Form>
    )
}
