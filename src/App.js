import React from "react";
import { BrowserRouter as Router, Route, Link,  NavLink  } from "react-router-dom";
import styled from "styled-components"
import Portfolio from "./portfolio"
import Example from "./example"
import {Card} from "./portfolio"

import Pie from "./pie"

import { Divider, Segment } from 'semantic-ui-react'

const Logo = styled.img`
  height: 100px;
`

const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
`

const Row = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
`

const NavContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
`

const LinkText = styled.span`
  text-decoration: none;
  color: #24353a;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`


const PageContainer = styled.div`
  width: 800px;
  margin: auto;
`

const data1= [{name: 'SpaceX', value: 100, fill: '#0088FE'}, {name: 'Group B', value: 600, fill: '#00C49F'},
{name: 'Group C', value: 100, fill: "#FFBB28"}, {name: 'Group D', value: 200, fill: '#FF8042'}];

const data2 = [{name: 'SpaceX', value: 100, fill: '#0088FE'}, {name: 'Group B', value: 600, fill: '#00C49F'},
{name: 'Group C', value: 100, fill: "#FFBB28"}, {name: 'Group D', value: 200, fill: '#FF8042'}];

const data3 = [{name: 'SpaceX', value: 100, fill: '#0088FE'}, {name: 'Group B', value: 600, fill: '#00C49F'},
{name: 'Group C', value: 100, fill: "#FFBB28"}, {name: 'Group D', value: 200, fill: '#FF8042'}];


const BasicExample = () => (
  <Router>
    <PageContainer>

    <NavBar>
    <Logo src="./logo.png"></Logo>
    <Row>

      <NavContainer>
      < NavLink  to="/" style={{textDecoration: "none"}}>
      <LinkText>Home</LinkText>
    </ NavLink >

  
    <NavLink  to="/portfolio" style={{
      textDecoration: "none",

    }}
  
     >
      <LinkText>INVEST</LinkText>
    </ NavLink>
    </NavContainer>
      
    </Row>


  </NavBar>
  <Divider />  
  <Content>
    <Route exact path="/" component={Home} />
    <Route exact path="/example" component={Example} />    
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
  </Content>
    </PageContainer>

  </Router>
);

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Home = () => (
  <HomeContainer>
    <h1>Portfolio Diversification Analysis</h1>  
    <Segment>
    <Pie data={data1}></Pie>    
    </Segment>
    <h1>Owned Stock</h1>      
    <Segment raised>
      <div style= {{display: "flex", justifyContent: "space-between"}}>
      <Card name={'SpaceX'} logo={'./spacex.png'} grow={true} price={234}></Card>
      <Card name={'Zalando'} logo={'./zalando.png'}  price={234}></Card>
      <Card name={'UBER'} logo={'./uber.png'}  price={223434}></Card>
      </div>

    </Segment>

    <Divider></Divider> 
  </HomeContainer>
);

const About = () => (
  <div>

    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;