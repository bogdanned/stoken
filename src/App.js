import { AragonApp, Button, AppBar, SidePanel, Text, Card, CircleGraph} from 'aragon-ui/index.cjs'
import React from 'react'
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const LoginButton = () => (<Button mode="strong">Login</Button>)

const Portfolio = ({percentage, name}) => (
  <div style={{padding: "5px"}}>
    <Card width="150px" height="200px" style={{padding: "10px"}}>
      <CardContent>
        <CircleGraph value={percentage} />
        <Text style={{margin: "5px"}}>{name}</Text>
        <Button mode="strong" style={{width: "110px"}}>View</Button>
      </CardContent>
    </Card>
  </div>

)



const App = () => (
  <AragonApp publicUrl="/">
    <AppBar title="Stoken" endContent={<LoginButton></LoginButton>}></AppBar>
    <SidePanel title="Stoker" opened={false}>
      <Button mode="positiv">Trade Stock</Button>
    </SidePanel>
    
  <Text size="xlarge" color="tomato">Portofolio</Text>
  <Row>
    <Portfolio name={"Thermondo"} percentage={1/10}></Portfolio>
    <Portfolio name={"SpaceX"} percentage={1/5}></Portfolio>
    <Portfolio name={"Tesla"} percentage={1/30}></Portfolio>
    <Portfolio name={"EBike"} percentage={1/34}></Portfolio>
    <Portfolio name={"Paypal"} percentage={1/530}></Portfolio>
    
  </Row>


  </AragonApp>
)


export default App