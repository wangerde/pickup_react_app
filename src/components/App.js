import React from 'react';
import SongList from '../song/SongList';
import SongDetail from '../song/songDetail';
import Game from '../tictac/game';

const App = () => {
    return( 
        <div className="ui container grid"> 
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail /> 
                </div>
            </div>      
            <Game />
        </div>
    );
};

export default App;