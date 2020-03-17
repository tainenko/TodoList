import React from "react";
import PropTypes from 'prop-types';
import {setFilter} from '../actions';
import {connect} from 'react-redux';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            <a href="#" className="filter not-seleted" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
};

Link.propTYpes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);