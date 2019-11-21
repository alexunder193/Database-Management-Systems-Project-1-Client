import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { queries } from '../util/APIUtils';
import LoadingIndicator  from '../common/LoadingIndicator';
import { Button, Icon, notification, Input} from 'antd';
import { withRouter } from 'react-router-dom';
import DateRangeStart from './DateRangeStart';
import Drop from './Drop';
import { InputNumber } from 'antd';

class Insert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sourceIp: null,
            timestamp: null,
            type: null,
            size: null,
            method: null,
            referer:null,
            resource: null,
            response: null,
            userAgent: null,
            userId: null,
            destinationIp: null,
            blockId: null
        };
        this.whenSubmit = this.whenSubmit.bind(this);
        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
        this.handleInputChange4 = this.handleInputChange4.bind(this);
        this.handleInputChange5 = this.handleInputChange5.bind(this);
        this.handleInputChange6 = this.handleInputChange6.bind(this);
        this.handleInputChange7 = this.handleInputChange7.bind(this);
        this.handleInputChange8 = this.handleInputChange8.bind(this);
        this.handleInputChange9 = this.handleInputChange9.bind(this);
        this.handleInputChange10 = this.handleInputChange10.bind(this);
        this.handleInputChange11 = this.handleInputChange11.bind(this);
        this.handleInputChange12 = this.handleInputChange12.bind(this);
    }

    callbackFunction3 = (childStart) => {
        console.log("callBack")
        this.setState({timestamp: childStart})
    }

    handleInputChange1 = (event) => {
        this.setState({ sourceIp: event.target.value})
    }

    handleInputChange2(event) {
        this.setState({ timestamp: event.target.value })
    }

    handleInputChange3(event) {
        this.setState({ type: event.target.value })
    }

    handleInputChange4(event) {
        this.setState({ size: event.target.value })
    }

    handleInputChange5(event) {
        this.setState({ method: event.target.value })
    }

    handleInputChange6(event) {
        this.setState({referer: event.target.value })
    }

    handleInputChange7(event) {
        this.setState({resource: event.target.value})
    }

    handleInputChange8(event) {
        this.setState({response: event.target.value})
    }

    handleInputChange9(event) {
        this.setState({userAgent: event.target.value})
    }

    handleInputChange10(event) {
        this.setState({userId: event.target.value})
    }

    handleInputChange11(event) {
        this.setState({destinationIp: event.target.value})
    }

    handleInputChange12(event) {
        this.setState({blockId: event.target.value})
    }


    whenSubmit(){
        // const insertRequest = {
        //     sourceIp: this.state.sourceIp,
        //     timestamp: this.state.start.format(),
        //     type: this.state.type,
        //     size: this.state.size,
        //     method: this.state.method,
        //     referer: this.state.referer,
        //     resource: this.state.resource,
        //     response: this.state.response,
        //     userAgent: this.state.userAgent,
        //     userId: this.state.userId,
        //     destinationIp: this.state.destinationIp,
        //     blockId: this.state.blockId
        // };
        console.log('You are in when Submit')
        console.log(this.state)
        {/*
        insert(insertRequest)       //Make a function in Util!!!!!!!!!!!!
        .then(response => {
            notification.success({
                message: 'Log Database App',
                description: "The result of our query",
            });          
            //this.props.history.push("/login");
        }).catch(error => {
            notification.error({
                message: 'Log Database App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
        // console.log(this.state.timstamp.format())
        // console.log(this.state.end.format())
    // console.log(this.state.type)  */}
}


    render() {
      //  if (this.props.isAuthenticated) {
            return (
                <div className="insert-container">
                    <br/>
                    <h2>Please insert a log:</h2><br/>
                        <Input style ={{width: "200px"}}placeholder="Source Ip" onChange={this.handleInputChange1}/>
                    <br/><br/>
                        <DateRangeStart parentCallback = {this.callbackFunction3} onChange={this.handleChange2}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Type" onChange={this.handleInputChange3}/>
                    <br/><br/>
                    <Input style ={{width: "200px"}}placeholder="Size" onChange={this.handleInputChange4}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Method" onChange={this.handleInputChange5}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Referer" onChange={this.handleInputChange6}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Resource" onChange={this.handleInputChange7}/>
                    <br/><br/>
                    <Input style ={{width: "200px"}}placeholder="Response" onChange={this.handleInputChange8}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="User Agent" onChange={this.handleInputChange9}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="User Id" onChange={this.handleInputChange10}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Destination" onChange={this.handleInputChange11}/>
                    <br/><br/>
                        <Input style ={{width: "200px"}}placeholder="Block Id" onChange={this.handleInputChange12}/>
                    <br/><br/>
                    <Button type="primary" onClick={this.whenSubmit}>Submit</Button>

                </div>
            );
       // }
        // else {
        //     return (
        //         <div className="query-container">
        //             <h2 style={{position: 'fixed', top:'50%', left:'30%'}}>
        //                 Please Log in or Sign Up in order to use the Database Application.
        //             </h2>
        //         </div>   
        //     );
        // }
    }
}

export default withRouter(Insert);