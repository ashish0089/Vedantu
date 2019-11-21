import React from 'react';
import './App.css';
import RepoPageComp from './RepoPageComp';

class RightPanel extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchText:'',
            repoData :[],
            initialData: []
        }
    }
    componentDidMount(){
        fetch('https://api.github.com/users/supreetsingh247/repos')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                repoData:data
            });
            this.setState({
                initialData:[...data]
            });
        });
        
    }

    handleChange(event){
        this.setState({
            searchText:event.target.value
        });

        var Filtereddata = this.state.initialData;
        if(event.target.value === ''){
            this.setState({
                repoData:Filtereddata
            });
            
        }else {
            Filtereddata = this.state.repoData.filter(repo =>{
                return repo.name.indexOf(this.state.searchText) !== -1;
            });
            this.setState({
                repoData:Filtereddata
            });
        }
        
    }

    render(){
        return (
            <div className = 'rightPanelPage'>
                <div className= 'navContainer'>
                    <span className='navbar'>Overview</span>
                    <span className='navbar'>Repositories</span>
                    <span className='navbar'>stars</span>
                    <span className='navbar'>Follower</span>
                    <span className='navbar'>Following</span>
                </div>
                <div>
                    <div className='repoConatiner'>
                    <input 
                    className='searchRepo' 
                    type ="text" 
                    value ={this.state.searchText} 
                    placeholder ='Find a repository ...'
                    onChange={this.handleChange}/>
                     <select>
                        <option>All</option>
                        <option>Public</option>
                        <option>Private</option>
                        <option>Source</option>
                        <option>Forks</option>
                        <option>Archived</option>
                     </select>
                     <select>
                        <option>All</option>
                        <option>javaScript</option>
                        <option>HTML</option>
                        <option>CSS</option>
                     </select>
                     </div>
                    <div>
                        {this.state.repoData.length !== 0 && 
                            this.state.repoData.map((repo) =>{
                                return <RepoPageComp repo={repo} key={repo.id}></RepoPageComp>
                            })}
                    </div>
                </div>
            </div>
        );
    }

}

export default RightPanel;