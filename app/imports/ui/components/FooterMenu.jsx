import React from 'react';
import { Container, Menu, Icon, Dropdown, Grid, GridColumn, List, Item } from 'semantic-ui-react';
export default class FooterMenu extends React.Component {
  render() {
    return (
        <Container className="footerBackground">
          <Grid style={{marginLeft: "100px"}}>
            <Grid.Row columns={3}>
              <Grid.Column>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Store Location</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Shipping and Returns</List.Item>
                </List>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}