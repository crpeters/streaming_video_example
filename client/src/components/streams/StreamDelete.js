import React from 'react';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from "../../history";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    renderActions = () => {
        //<> === React.Fragment, use the full component if linter has trouble with <>
        return (
            <>
                <Link
                    to="/" 
                    className="ui button"
                >
                    Cancel
                </Link>
                <button
                    onClick={this.onSubmit}
                    className="ui button negative"
                >
                    Delete
                </button>
            </>
        );
    }

    onSubmit = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderContent = () => {
        if (!this.props.stream)
            return "Are you sure you want to delete this stream?"

        return `Are you sure you want to delete this stream: ${this.props.stream.title}?`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);