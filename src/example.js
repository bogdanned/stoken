import React, { Component } from 'react'
import { Menu, Segment, Card, Message, Divider } from 'semantic-ui-react'
import styled from "styled-components"
import Chart from "./chart"

const Headline = styled.div`
    font-size: 26px;
`

const HeadLineRow = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: space-between;
`



export default () => (
    <div>
    
        <HeadLineRow>
        <Headline>Space Exploration Technologies Inc</Headline>
        <Divider />
        
        <Headline>343,32€</Headline>    
        </HeadLineRow>
        <Message>
        <Message.Header>
          Company Description
        </Message.Header>
        <p>
        SpaceX (Space Exploration Technologies Corporation) ist ein privates US-amerikanisches Raumfahrtunternehmen. Das Unternehmen wurde mit dem Ziel gegründet, Technologien zu entwickeln, die es der Menschheit ermöglichen sollen, den Mars zu kolonisieren und das Leben auf anderen Planeten zu verbreiten.
        </p>
      </Message>
        <span>
        </span>
        <Chart></Chart>
        <Divider />
        
        <Message>
        <Message.Header>
          Share Swapping
        </Message.Header>
        <p>
        SpaceX (Space Exploration Technologies Corporation) ist ein privates US-amerikanisches Raumfahrtunternehmen. Das Unternehmen wurde mit dem Ziel gegründet, Technologien zu entwickeln, die es der Menschheit ermöglichen sollen, den Mars zu kolonisieren und das Leben auf anderen Planeten zu verbreiten.
        </p>
      </Message>
      <Segment raised>
      SpaceX (Space Exploration Technologies Corporation) ist ein privates US-amerikanisches Raumfahrtunternehmen. Das Unternehmen wurde mit dem Ziel gegründet, Technologien zu entwickeln, die es der Menschheit ermöglichen sollen, den Mars zu kolonisieren und das Leben auf anderen Planeten zu verbreiten.
      </Segment>
      <Divider />
      
      <Message>
      <Message.Header>
        Vesting Options
      </Message.Header>
      <p>
      SpaceX (Space Exploration Technologies Corporation) ist ein privates US-amerikanisches Raumfahrtunternehmen. Das Unternehmen wurde mit dem Ziel gegründet, Technologien zu entwickeln, die es der Menschheit ermöglichen sollen, den Mars zu kolonisieren und das Leben auf anderen Planeten zu verbreiten.
      </p>
    </Message>
    </div>

)

