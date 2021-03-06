import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardHeader,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Alert
 } from "reactstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ReactLoading from 'react-loading';

class Prescription_Update extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pname: props.history.location.state.some[4],
      nid: props.history.location.state.some[10],
      docname: props.history.location.state.some[1],
      drid: props.history.location.state.some[5],
      inputAddress: props.history.location.state.some[6],
      phnno: props.history.location.state.some[9],
      inputDetails: props.history.location.state.some[2],
      inputMed: props.history.location.state.some[7],
      viewPresciption :  props.history.location.state.some[0],
};
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  render() {
   return (
      
   <div className="content">

      <Mutation
      mutation={gql`
      mutation updatePrescription(
        $id : ID!,
        $owner: String!,
        $nid: String,
        $docname: String!,
        $docid: String!,
        $chember: String,
        $details: String!,
        $med: String,
        $phn: String
       ){
          updatePrescription(
              id : $id,
            owner: $owner,
            nid  : $nid ,
        docname  : $docname,
         docid   : $docid,
        chember  : $chember,
        details  : $details,
           med   : $med,
          phn    : $phn
          ){
            id
            owner
            docname
            details
            phn
          }
        }
      `}
      variables = {{
        id : this.state.viewPresciption,
        owner: this.state.pname,
        nid: this.state.nid,
        docname: this.state.docname,
        docid: this.state.drid,
        chember: this.state.inputAddress,
        details: this.state.inputDetails,
        med: this.state.inputMed,
        phn: this.state.phnno,
      }}
  >
    {(updatePrescription, {data, loading, error}) => {
      if (loading) return <div>
      <ReactLoading className="loadingScreenAnimation" type={'spin'} color={'white'} height={'60%'} width={'60%'} />
      </div>;
      if (data) return  <div className="successCreateNoify">
        <Card className="successCreateNoifyHelper" style={{width: '30rem'}}>
          <CardImg top src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Card image cap" />
          <CardTitle>Prescription Updated Successfully!!</CardTitle>
          <CardText>
          Prescription ID : <b>{data.updatePrescription.id}</b>< br />
          Patient Name : <b>{data.updatePrescription.owner}</b>< br />
          Doctor Name : <b>{data.updatePrescription.docname}</b>< br />
          Health Issues : <b>{data.updatePrescription.details}</b>< br />
          Paitent Contact No : <b>{data.updatePrescription.phn}</b>< br />
          </CardText>
          
        </Card>
       </div> ;
      if (error) return <p>Error :(</p>;
       
        
      return  <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h5 className="title">Update Prescription</h5>
            <Alert color="warning"><b>Input fields are already filled with existing prescription data</b> </Alert>
         </CardHeader>
          <CardBody>
          <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <FormGroup className="col-md-6">
              <Label for="pname">Patient Name</Label>
              <Input type="text"  id="pname" placeholder={this.state.pname} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="nid">NID / Passpost No / Birth Cirtificate No</Label>
              <Input type="text"  id="nid" placeholder={this.state.nid} onChange={this.handleChange}/>
            </FormGroup>
          </div>
          <div className="form-row">
            <FormGroup className="col-md-6">
              <Label for="docname">Doctors Name</Label>
              <Input type="text"  id="docname" placeholder={this.state.docname} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="drid">Doctors ID</Label>
              <Input type="text"  id="drid" placeholder={this.state.drid} onChange={this.handleChange}/>
            </FormGroup>
          </div>
          <div className="form-row">
            <FormGroup className="col-md-6">
            <Label for="inputAddress">Chember Address</Label>
            <Input type="text"  id="inputAddress" placeholder={this.state.inputAddress} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="phnno">Patient contact no</Label>
              <Input type="text"  id="phnno" placeholder={this.state.phnno} onChange={this.handleChange}/>
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="inputDetails">Details</Label>
            <Input type="text"  id="inputDetails" placeholder={this.state.inputDetails} onChange={this.handleChange}/>
          </FormGroup>
          <div className="form-row">
            <FormGroup className="col-md-12">
              <Label for="inputMed">Medicine</Label>
              <Input type="text"  id="inputMed" placeholder={this.state.inputMed} onChange={this.handleChange}/>
            </FormGroup>
          
          </div>
          
          <Button type="submit" value="Submit" color="success" size="lg" onClick={()=>{updatePrescription()}}><i className="fa fa-save"/> &nbsp;Update</Button>
        </form>
                </CardBody>
              </Card>
            </Col>
          </Row>;
            }}
        </Mutation>

    </div>
    );
  }
}

export default Prescription_Update;
