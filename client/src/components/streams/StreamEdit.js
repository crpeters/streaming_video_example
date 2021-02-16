import React from 'react';
import {connect} from 'react-redux';
import {getStream, editStream} from '../../actions';
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.getStream(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){
        if(!this.props.stream)
            return <h6>No Stream exists....</h6>
        
            return (
                <div>
                    <h3>Edit a Stream:</h3>
                    <StreamForm 
                        onSubmit={this.onSubmit} 
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                    />
                </div>
            )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {getStream, editStream})(StreamEdit);