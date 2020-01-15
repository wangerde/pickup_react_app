import React, { Component } from 'react';
import Radium from 'radium';

import SongList from '../components/song/SongList';
import SongDetail from '../components/song/songDetail';
import Game from '../components/tictac/game';
import NameAges from '../components/nameAges/nameages'; 
import Cockpit from '../components/Cockpit/Cockpit'; 
import Incubee from '../components/incubee/incubee'; 

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import classes from './App.css';

import './App.css';

class App extends Component {
    state = {
        nameages: [
            { id:'1', name: 'Xin', age: 28 },
            { id:'2', name: 'Gai', age: 32 },
            { id:'3', name: 'Ruyan', age: 58 }
        ],
        someother: 'some other state',
        shownameages: false,
        showCockpit: true,
        counter: 0,
        authenticated: false,

        incubee: [
            { name: 'Gavin', age: 32, process: 0.3},
            { name: 'Huan', age: 27, process: 0.1},
            { name: 'Dudu', age: 23, process: 0.4}
        ]
    }

    componentDidUpdate() {
        console.log('component did update');
    }
    

    shouldComponentUpdate() {
        console.log('should component update');
        return true;
    }
    // 函数中内嵌函数，为了使用react 16.8新添加的功能 functional component中的
    // state hooks， 有了这些hooks，functional component不再叫stateless component了
    // 因为可以在component中修改state 我不太明白为什么要这么搞 这样一来 functional和class
    // component的区别在哪儿

    nameChangedHandler = (event, id) => {
        const nameageIndex = this.state.nameages.findIndex(p =>{
            return p.id === id;
        });
        const nameage = {
            ...this.state.nameages[nameageIndex]
        }

        nameage.name = event.target.value;

        const nameages = [...this.state.nameages];
        nameages[nameageIndex] = nameage;

        this.setState((prevState, props)=>{
            return {nameages: nameages, counter: prevState.counter + 1
            }
        })
    }

    deletenameageHandler = (nameageIndex) => {
        // const nameages = this.state.nameages.slice();
        const nameages = [...this.state.nameages];
        nameages.splice(nameageIndex, 1);
        this.setState({nameages: nameages})
    }

    togglenameagesHandler = () => {
        
        const doesShow = this.state.shownameages;
        this.setState({
            shownameages: !doesShow
        })
    }

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render() {

        let nameages = null;
        if(this.state.shownameages){
            nameages = <NameAges nameages={this.state.nameages}
                              clicked={this.deletenameageHandler}
                              changed={this.nameChangedHandler}
                              isAuthenticated={this.state.authenticated}
                              />
        }

        return( 
            <Aux className="ui container grid"> 
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetail /> 
                    </div>
                </div >
                <div className="ui row">
                    <div className="column eight wide">
                        <Game />
                    </div> 
                </div> 

                <div className="ui row">
                    <button onClick={
                        ()=>{
                            this.setState({ showCockpit: false });
                        }
                    }>Remote Cockpit</button>
                    {this.state.showCockpit ? (
                    <Cockpit shownameages={this.state.shownameages}
                             nameages={this.state.nameages}
                             clicked={this.togglenameagesHandler}
                             login={this.loginHandler}
                             />
                    ) : null }
                </div>
                {nameages}
                <div className="ui row">
                    <Incubee name={this.state.incubee[0].name}
                             age={this.state.incubee[0].age}
                             process={this.state.incubee[0].process} />
                </div>
            </Aux>
        );
    }
    };

export default withClass(App, classes.App);