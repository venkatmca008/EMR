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
import { GraphQLClient } from 'graphql-request';

const Client = new GraphQLClient('https://api.graph.cool/simple/v1/cjnaaji6g014p0127lqfjvz73', {
 headers : {

 }
});

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
    
    this.reg = this.reg.bind(this);
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
     await client.mutate({
      mutation: gql`
         mutation signinUser($email: String!, $password: String!){
        signinUser(
          email: { email: $email, password: $password }
        ) {
          token
          user {
            id
            utype
            email
            name
            phone
            nid
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

    })
    .then(result => { 
      
      if (result.data.signinUser.user.utype === "Pharmacy") {
        this.props.history.push({
          pathname: '/search',
          state: { logInfo: [result.data.signinUser.token, 
                          result.data.signinUser.user.id] }
        });
      } else if(result.data.signinUser.user.utype === "Doctor") {
        this.props.history.push({
          pathname: '/docdash',
          state: { logInfo: [result.data.signinUser.token, 
                          result.data.signinUser.user.nid,
                        result.data.signinUser.user.name] }
        });
      } else if(result.data.signinUser.user.utype === "Hospital") {
        this.props.history.push({
          pathname: '/hospitaldashboard',
          state: { logInfo: [result.data.signinUser.token, 
            result.data.signinUser.user.id,
            result.data.signinUser.user.phone,
            result.data.signinUser.user.nid,
          result.data.signinUser.user.name] }
        });
      } else if(result.data.signinUser.user.utype === "Patient") {
        this.props.history.push({
          pathname: '/userdashboard',
          state: { logInfo: [result.data.signinUser.token, 
                          result.data.signinUser.user.id,
                          result.data.signinUser.user.phone,
                          result.data.signinUser.user.nid,
                        result.data.signinUser.user.name] }
        });
      }
       else if(result.data.signinUser.user.utype === "Admin") {
        this.props.history.push({
          pathname: '/dashboard',
          state: { logInfo: [result.data.signinUser.token, 
                          result.data.signinUser.user.id,
                          result.data.signinUser.user.phone,
                          result.data.signinUser.user.nid,
                        result.data.signinUser.user.name] }
        });
      }
     })
    .catch(error => { alert("Incorrect username or password") });
 }



reg() {
  const email = this.state.regEmail
  const pass = this.state.regPass 
  const nid = this.state.regId
  const phone = this.state.regPhn
  const utype = this.state.regType
  const name = this.state.regName

  return Client.request(`
   mutation(
     $email : String!
     $pass : String!
     $nid : String
     $phone : String
     $utype : String
     $name : String
   ){
    createUser(
      authProvider : {
        email : {
          email : $email
          password : $pass
        }
      }
      nid : $nid
      phone : $phone
      utype : $utype 
      name : $name
    ){
      id
    }
  }
 
`,
      {
        email,
        pass ,
        nid,
        phone,
        utype,
        name
      })
      .then(result => { 
        alert("User registered successfully")
        

      })
      .catch(error => { alert("Email Id is already registered") })
      }


  render() {
    return (
      <div className="authMain">
      <h2 className="mainAuthLogo"><span className="authPageTextLogo"><b>IMDRMS</b></span></h2>
      <div className ="authFormHelper">
      <div className="authForm">

      
      
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
              <option>Please Select</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Pharmacy</option>
              <option>Hospital</option>
            </Input>
          </FormGroup>
         
        </div>
        </form>
      <Button type="submit" color="primary" onClick={this.reg}>Register</Button>
          </TabPane>
        </TabContent>
      </div>
      
      </div>
      </div>
     );
  }
  
}

export default Auth;
