import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Col from "react-bootstrap/Col";

const WorkProfile = (props) => {

    const onWorkProfChange = (e) => {
        e.preventDefault();
        props.onWorkProfChange(e.target.name, e.target.value);
    };

    return (

        <Form>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="currentProject" className="mr-sm">Current Project:</Label>
                <Col sm={5}>
                    <Input type="text" name="currentProject" id="currentProject"
                           placeholder="Current project you are working on..." onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="recentPublication" className="mr-sm">Recent Publication:</Label>
                <Col sm={5}>
                    <Input type="text" name="recentPublication" id="recentPublication"
                           placeholder="Name your recent publication..." onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="schoolHomepage" className="mr-sm">School Homepage:</Label>
                <Col sm={5}>
                    <Input type="text" name="schoolHomepage" id="schoolHomepage" placeholder="Your School homepage..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="workHomepage" className="mr-sm">Work Homepage:</Label>
                <Col sm={5}>
                    <Input type="text" name="workHomepage" id="workHomepage" placeholder="Your work homepage..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>

            <FormGroup row className="mb-2 mr-sm-2  mb-lg-0">
                <Label for="basedNear" className="mr-sm">Based Near:</Label>
                <Col sm={5}>
                    <Input type="text" name="basedNear" id="basedNear" placeholder="Based near..."
                           onChange={onWorkProfChange}/>
                </Col>
            </FormGroup>


        </Form>

    );
}

export default WorkProfile;
