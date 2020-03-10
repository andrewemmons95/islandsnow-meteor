import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    const style1 = {
      padding: "50px"
    }

    return (
        <Menu borderless className="middlemenu">
          <Grid container centered columns={10}>
            <Grid.Column style={{style1, marginRight: "-20px"}}>
              <Dropdown item text="MENS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1}}>
              <Dropdown item text="WOMENS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1, marginRight: "-30px"}}>
              <Dropdown item text="KIDS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1, marginRight: "-10px"}}>
              <Dropdown item text="BRANDS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1}}>
              <Menu.Item>SALE</Menu.Item>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}