import React from 'react';
import './App.css';
// import moment from 'moment';

function RepoPageComp(props){
    return (
        <div className='repotable'>
            <div className='repoName'>{props.repo.name}</div>
            <div className='description'>{props.repo.description}</div>
            <div className='language'>{props.repo.language}</div>
            <hr></hr>
        </div>
    );
}

export default RepoPageComp;

