import React from "react";
import { 
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 

} from "reactstrap";
import classnames from 'classnames';
import {client} from "../../index";
import gql from "graphql-tag";


class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      loginEmail : '',
      loginPass : '',
      token : '',
      regEmail : '',
      regPass : '',
      regName : '',
      regId : '',
      regPhn : '',
      regType : '',

    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  async login(){
    alert("Successfully Loggedin")
    const obj = await client.mutate({
      mutation: gql`
         mutation signinUser($email: String!, $password: String!){
        signinUser(
          email: { email: $email, password: $password }
        ) {
          token
          user {
            id
            email
            name
            phone
            prescriptions {
              docname
              docid
              details
              med
            }
          }
        }
      }
      `,
      
      variables: {
        email: this.state.loginEmail,
        password: this.state.loginPass
      },

    });
 }

 async register(){
  alert("Successfully Registered")
  const obj = await client.mutate({
    mutation: gql`
       mutation createUser($email: String!, $password: String!){
        createUser(
          authProvider : {
        email: { email: $email, password: $password }
          }
      ) {
        id
      }
    }
    `,
    
    variables: {
      email: this.state.regEmail,
      password: this.state.regPass
    },

  });
}


  render() {
    return (
      <div className="authMain">
      <div className ="authFormHelper">
      <div className="authForm">

      <div className="authFormImgHelper">
      <img className="authFormImg" src ="https://png2.kisspng.com/20180329/cre/kisspng-logo-swarm-computer-icons-pharma-5abd434994b948.7788752515223529696092.png" alt ="Missing"/>
      </div>
      
      <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Register
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
          
          <form className="authFormDevider">
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              id="loginEmail"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              id="loginPass"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>
        <Button color="primary" onClick={this.login}>
            Login
          </Button>
          </form>

          </TabPane>
          
          <TabPane tabId="2">

          <form className="authFormDevider">
          <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">Email</Label>
            <Input type="email"  id="regEmail" placeholder="Email" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputPassword4">Password</Label>
            <Input type="password"  id="regPass" placeholder="Password" onChange={this.handleChange}/>
          </FormGroup>
         </div>
          <FormGroup>
            <Label for="inputAddress">Name</Label>
            <Input type="text"  id="regName" placeholder="User Full Name" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="inputAddress2">Identification Number</Label>
            <Input type="text"  id="regId" placeholder="Nid / Passport / Birth Cirtificate/ Doctor, Pharma or Hospitals licence no" onChange={this.handleChange}/>
          </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputCity">Phone</Label>
            <Input type="text"  id="regPhn" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputState">User Type</Label>
            <Input type="select" name="select" id="regType" onChange={this.handleChange}>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Pharmacy</option>
              <option>Hospital</option>
            </Input>
          </FormGroup>
         
        </div>
        
        <Button type="submit" color="primary" onClick={this.register}>Register</Button>
      </form>

          </TabPane>
        </TabContent>
      </div>
      
      </div>
      </div>
     
     
    );
  }
  
}

export default Auth;
