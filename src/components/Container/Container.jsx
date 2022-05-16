import PropTypes from 'prop-types';

import './container.css'

const Container = ({children}) => {
    return (
        <div className="container">{children}</div>
    )
}

export default Container;

Container.propTypes = {
    children: PropTypes.node,
}