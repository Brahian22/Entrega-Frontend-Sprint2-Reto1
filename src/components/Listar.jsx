import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Cards from './Cards';

export default class Listar extends Component {

    constructor(){
        super()
        this.state = {
            jobs: []
        }
    }

    async componentDidMount(){
        const urlJobs = 'https://jobs-datajson.herokuapp.com/jobs/'
        const resp = await fetch(urlJobs);
        const data = await resp.json();
        this.setState({jobs:data})
        console.log(data)
    }
    

  render() {

    return (
      <Container>
           <div style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                     this.state.jobs.map((jobs,index) => (
                        <Cards 
                        key={index}
                        jobs={jobs}/>
                     ))
                 }
                 </div>
      </Container>
    )
  }
}
