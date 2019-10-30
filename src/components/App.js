import React, { useState } from 'react';

import SongList from '../song/SongList';
import SongDetail from '../song/songDetail';
import Game from '../tictac/game';
import NameAge from '../nameAge/nameage';
import './App.css';

const App = () => {
    const [personState, setPersonState ] = useState({
        persons: [
            { name: 'Xin', age: 28 },
            { name: 'Gai', age: 32 },
            { name: 'Ruyan', age: 58 }
        ]
    });

    // 函数中内嵌函数，为了使用react 16.8新添加的功能 functional component中的
    // state hooks， 有了这些hooks，functional component不再叫stateless component了
    // 因为可以在component中修改state 我不太明白为什么要这么搞 这样一来 functional和class
    // component的区别在哪儿

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: '王欣', age: 28 },
                { name: '庄恢盖', age: 32 },
                { name: '符如燕', age: 58 }
            ]
        })
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
                {/* 以nameage为例，在这儿写进去dynamic的property/attribute，然后通过
                props传给child component, like nameage component.那边就获得了
                来自parent app.js中的data (Xin,28,Ruyan,58) */}
                <NameAge 
                    name={personState.persons[0].name}
                    age={personState.persons[0].age}
                />
                <NameAge 
                    name={personState.persons[1].name}
                    age={personState.persons[1].age}
                />
                <NameAge 
                    name={personState.persons[2].name}
                    age={personState.persons[2].age}
                />
            </div>
            <div className="ui row">
                <button 
                    className="ui switchName"
                    onClick={switchNameHandler}
                >改名字</button>  
            </div>
        </div>
    );
};

export default App;