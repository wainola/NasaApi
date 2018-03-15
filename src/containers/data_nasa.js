import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDataNasa} from '../actions/index';

class DataNasa extends Component{
    constructor(props){
        super(props);
        this.clickData = this.clickData.bind(this);

    }

    clickData(event){
        console.log("click");
        this.props.fetchDataNasa("FETCH_DATA");
    }

    render(){
        console.log("PROPS");
        console.log(this.props);
        console.log("STATE");
        console.log(this.state);
        return(
            <div>
                <button type="button" onClick={this.clickData}>Click Me!</button>
            </div>
        );
    }
}

function mapStateToProps({dataNASA}){
    return{dataNASA};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchDataNasa}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataNasa);