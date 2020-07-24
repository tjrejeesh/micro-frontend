import React from "react";
import Header from "./components/Header";
import {  Grid, Rail, Segment, Container } from 'semantic-ui-react'

export default function Root() {
  return <div>
              <Container>
                  <Header/>
                  <Grid centered columns={3}>
                      <Grid.Column>
                              <Rail position='left'>
                                  <Segment>
                                      <a href="/candidates">Candidates</a>
                                  </Segment>
                              </Rail>

                              <Rail position='centre'>
                                  <Segment>
                                  <a href="/panelists">Panelists</a>
                                  </Segment>
                              </Rail>

                              <Rail position='right'>
                                  <Segment>
                                  <a href="/">Evaluation</a>
                                  </Segment>
                              </Rail>
                      </Grid.Column>
                  </Grid>
              </Container>
         </div>;
}
