import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonComponent from './button.js'
import JobService from '../services/jobService.js'
import ListAutoComplete from './listAutoComplete.js'

import '../styles/navbar.scss'
  
class NavBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchText: ''
        }
        this.jobService = new JobService();
    }

    async search(text){
        const list = await this.jobService.getJobs(text);
        const limit = list.length > 10 ? 10 : list.length;
        console.log(list)
        if(text.length > 2 && !list.error){
            this.setState({
                searchText: text,
                jobList: list.slice(0,limit)
            });
        } else {
            this.setState({
                searchText: text,
                jobList: null
            });
        }
    }

    handleChange(event) {
        if(event.target.value.length > 2){
            this.search(event.target.value);
        }
    	this.setState({ searchText: event.target.value });
        this.props.searchText(event.target.value);
    }

    async getJobInfo(job){
        console.log(await this.jobService.getInfoJob(job.uuid));
        this.setState({
            searchText: job.normalized_job_title,
            jobList: null
        });
    }
      
    resetValues(){
        setTimeout(function(){
            this.setState({
                searchText: '',
                jobList: null
            })
        }
        .bind(this), 500);
        
    }

    render() {
        return (
        <div className="nav-bar">
            <span>Start Bootstrap</span>
            <div className="icons">
                <div>
                    <FontAwesomeIcon icon="bell" />
                </div>
                <div>
                    <FontAwesomeIcon icon="envelope" />
                </div>
                <div>
                    <FontAwesomeIcon icon="user-circle" />
                </div>
            </div>
            <div className="search-div">
                <ButtonComponent onClick={ () => this.search('equis') }>
                    <FontAwesomeIcon icon="search" />
                </ButtonComponent>
                <input type="text"
                    onChange={this.handleChange.bind(this)}  
                    value={this.state.searchText} 
                    onBlur={this.resetValues.bind(this)}
                    placeholder="Search for..."></input>
                {
                    this.state.jobList ?
                    <ListAutoComplete 
                        list={this.state.jobList} 
                        clicked={this.getJobInfo.bind(this)}>
                    </ListAutoComplete>
                    : null
                }
            </div>
        </div>
        );
    }
}

ButtonComponent.propTypes = {
    searchText: PropTypes.string
}

export default NavBar;
