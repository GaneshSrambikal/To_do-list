import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getLists, deleteList } from '../actions/ListAction';
import PropTypes from 'prop-types';


class TodoList extends Component {
    componentDidMount() {
        this.props.getLists();
    };

    onDeleteClick = (id) => {
        this.props.deleteList(id);
    }

    render() {

        const { lists } = this.props.list;
        return (
            <Container>

                <ListGroup>
                    <TransitionGroup className="Todo-list">
                        {lists.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

TodoList.PropTypes = {
    getLists: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    list: state.list
});

export default connect(mapStateToProps, { getLists, deleteList })(TodoList);