import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var FontAwesome = require('react-fontawesome');

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Logo = styled.img`
    max-height: 150px;
    max-width: 150px;
`

const CardContainer = styled.div`
    display: flex;
    height: 200px;
    width: 200px;
    border-radius: 5px;
    border: 1px solid grey;
    color: grey;
    margin: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #24353a;
    &:hover {
        cursor: pointer;
        color: #24353a;
        box-shadow: 2px 2px 2px 2px #24353a;
        border: 1px solid #24353a;        
    }
`

export const Card = ({name, price, grow, path, logo}) => (
    <Link to={"/example"}>
    <CardContainer >
        <Logo src={logo}></Logo>
        {/*<h4>{name}</h4>*/}
        <div>
            {grow  ? 
                <FontAwesome 
                name='rocket'
                size='2x'
                style={{color: "green"}}                
                name='caret-up' /> : 
                <FontAwesome 
                name='caret-down' 
                size='2x'
                style={{color: "red"}}
                />}        
            <span>{price} €</span>
        </div>
    </CardContainer >
    
    </Link>

)



export default () => (

    <div >
    
    <Row>
        <Card name={'SpaceX'} logo={'./spacex.png'} grow={true} price={234}></Card>
        <Card name={'Zalando'} logo={'./zalando.png'}  price={234}></Card>
        <Card name={'UBER'} logo={'./uber.png'}  price={223434}></Card>
        <Card name={'Foodora'} logo={'./food.png'} price={232344}></Card>
        <Card name={'Ammazon'} logo={'./babbel.png'}  price={232434}></Card>
        <Card name={'Climate KX'} logo={'./slack.png'} price={234}></Card>
        <Card name={'Dropbox'} logo={'./drop.png'} price={243234}></Card>
        <Card name={'Airbnbn'} logo={'./air.png'} price={243234}></Card>   
        <Card name={'N26'} logo={'./n26.png'} price={243234}></Card>        
        
    </Row>
    
    </div>


)