import React, { Component } from 'react';

import SongList from '../song/SongList';
import SongDetail from '../song/songDetail';
import Game from '../tictac/game';
import NameAge from '../nameAge/nameage'; 
import './App.css';

class App extends Component {
    state = {
        persons: [
            { id:'1', name: 'Xin', age: 28 },
            { id:'2', name: 'Gai', age: 32 },
            { id:'3', name: 'Ruyan', age: 58 }
        ],
        someother: 'some other state',
        showPersons: false
    }

    // 函数中内嵌函数，为了使用react 16.8新添加的功能 functional component中的
    // state hooks， 有了这些hooks，functional component不再叫stateless component了
    // 因为可以在component中修改state 我不太明白为什么要这么搞 这样一来 functional和class
    // component的区别在哪儿

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }

    render() {
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div className="ui row">
                    {/* 以nameage为例，在这儿写进去dynamic的property/attribute，然后通过
                    props传给child component, like nameage component.那边就获得了
                    来自parent app.js中的data (Xin,28,Ruyan,58) */}

                    {this.state.persons.map((person, index) => {
                        return <NameAge 
                            click={()=>this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event)=>this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            )
        }

        return( 
            <div className="ui container grid"> 
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
                    <button 
                        className="ui switchName"
                        onClick={this.togglePersonsHandler}
                    >改名字</button>  
                </div>
                {persons}
            </div>
        );
    };
}

export default App;