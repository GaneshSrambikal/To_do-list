import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getLists } from '../actions/ListAction';
import PropTypes from 'prop-types';


class TodoList extends Component {
    componentDidMount() {
        this.props.getLists();
    };

    render() {
        
        const { lists } = this.props.list;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter List');
                        if (name) {
                            this.setState(state => ({
                                lists: [...state.lists, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add List
            </Button>
                <ListGroup>
                    <TransitionGroup className="Todo-list">
                        {lists.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"

                                        onClick={() => {
                                            this.setState(state => ({
                                                lists: state.lists.filter(list => list.id !== id)
                                            }))
                                        }}
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

export default connect(mapStateToProps, { getLists })(TodoList);