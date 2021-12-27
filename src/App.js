import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import {
Grid,
Form,
Checkbox,
Button,
Segment,
Header,
Image,
Input,
Message
} from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
      <br />
      <br />
      <br />
        <Grid container textAlign="center">
        <Grid.Column width={6} >
        <Segment stacked>

          <Form>
            <Header as='h2' color="teal">
            <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> Member Login
            </Header>

            <Form.Field>
              <Input icon='user' iconPosition='left' placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
              <Input type="password" icon='lock' iconPosition='left' placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button fluid color="teal" type='submit'>LOGIN</Button>
          </Form>

          </Segment>
        </Grid.Column>

        </Grid>
        <Grid container textAlign="center">
          <Grid.Column width={6} >
            <Message>
              Tidak Punya Akun ? Silahkan <a href="/"> Register</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default App;
