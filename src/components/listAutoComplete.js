import React from 'react';
import PropTypes from 'prop-types';

import '../styles/listAutoComplete.scss'
  
class ListAutoComplete extends React.Component {

    createElements(list){
        return list.map((element, index) => {
            return <span 
                key={index} 
                onClick={() => this.props.clicked(element)}>
                    {element.normalized_job_title}
            </span>;
        })
    }

    render() {
        return (
            <div className="list-Auto-Complete" key="list">
                {this.createElements(this.props.list)}
            </div>
        );
    }
}

ListAutoComplete.propTypes = {
    list: PropTypes.array,
    clicked: PropTypes.func
};

export default ListAutoComplete;
