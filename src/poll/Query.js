import React, { Component } from 'react';
import { queries } from '../util/APIUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import DateRange from './DateRange';
import DateRangeStart from './DateRangeStart';
import Drop from './Drop';

class Query extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: null,
            end: null,
            word: null,
            type: null,
            listArray:[]
        };
        this.whenSubmit = this.whenSubmit.bind(this);
        this.whenSubmit1 = this.whenSubmit1.bind(this);
        this.whenSubmit2 = this.whenSubmit2.bind(this);
    }

    callbackFunction = (childStart, childEnd) => {
        console.log("callBack")
        this.setState({ start: childStart, end: childEnd })
    }

    callbackFunction1 = (myType) => {
        console.log("callBack1")
        this.setState({ type: myType })
    }

    callbackFunction2 = (cStart) => {
        console.log("callBack2")
        this.setState({ start: cStart })
    }

    whenSubmit() {
        const queryRequest = {
            startDate: this.state.start.format(),
            endDate: this.state.end.format(),
            word: 'FirstQuery',
            type: this.state.type
        };
        queries(queryRequest)
            .then(response => {
                //console.log(response)
                this.setState({ listArray: response, word:'FirstQuery' })
                console.log(this.state.listArray)
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
        console.log(this.state.start.format())
        console.log(this.state.end.format())
        console.log('FirstQuery')
        //console.log(this.state.type)
    }

    whenSubmit1() {
        const queryRequest = {
            startDate: this.state.start.format(),
            endDate: this.state.end.format(),
            word: 'SecondQuery',
            type: this.state.type
        };
        queries(queryRequest)
            .then(response => {
                this.setState({ listArray: response, word:'SecondQuery' })
                console.log(this.state.listArray)
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
        console.log(this.state.start.format())
        console.log(this.state.end.format())
        console.log('SecondQuery')
        console.log(this.state.type)
    }

    whenSubmit2() {
        const queryRequest = {
            startDate: this.state.start.format(),
            endDate: this.state.end.format(),
            word: 'ThirdQuery',
            type: this.state.type
        };
        queries(queryRequest)
            .then(response => {
                this.setState({ listArray: response, word:'ThirdQuery' })
                console.log(this.state.listArray)
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
        console.log(this.state.start.format())
        console.log('ThirdQuery')
        //console.log(this.state.end.format())
        //console.log(this.state.type)
    }

    render() {
        if (this.props.isAuthenticated) {
            var self =this;
            return (
                <div className="query-container">
                    <h3>Query 1</h3>
                    <DateRange parentCallback={this.callbackFunction} />
                    <br />
                    <Button type="primary" onClick={this.whenSubmit}>Submit</Button>
                    <br />
                    <br />
                    <h3>Query 2</h3>
                    <DateRange parentCallback={this.callbackFunction} />
                    <br />
                    <Drop parentCallback={this.callbackFunction1} />
                    <br />
                    <Button type="primary" onClick={this.whenSubmit1}>Submit</Button>
                    <br />
                    <br />
                    <h3>Query 3</h3>
                    <DateRangeStart parentCallback={this.callbackFunction2} />
                    <br />
                    <Button type="primary" onClick={this.whenSubmit2}>Submit</Button>
                    <br />
                    <br />
                    <br />
                    <div className="results">
                        <ul>
                            {this.state.listArray.map(function(name, index){
                                if (self.state.word !== 'ThirdQuery') {
                                    return <li key={ index }>{name[0]}{' '} {name[1]}</li>;
                                }
                                else {
                                    return <li key={ index }>{name[0]}{' '} {name[1]}{' '}{name[2]}</li>;
                                }
                            })}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="query-container">
                    <h2 style={{ position: 'fixed', top: '50%', left: '30%' }}>
                        Please Log in or Sign Up in order to use the Database Application.
                    </h2>
                </div>
            );
        }
    }
}

export default withRouter(Query);