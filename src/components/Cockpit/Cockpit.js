import React, { useEffect } from 'react';


const cockpit = (props) => {
    //useState();
    useEffect(()=> {
        console.log('cockpit useEffect');
        
    }, [props.nameages]);
    //上面[props.nameages]这个参数表明 useEffect只有在nameages更新时才会被invoke

    const classes = [];
    if(props.nameages.length <= 2){
        classes.push('red');
    }
    if(props.nameages.length <= 1){
        classes.push('bold');
    }
    return (
        <div className={classes.Cockpit}>
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mauris quis odio venenatis molestie. Nam porttitor a diam in placerat. Nam sem nisl, pulvinar eget leo non, dignissim rhoncus velit. Praesent suscipit ligula odio.</h1>
                <p className={classes.join(' ')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mauris quis odio venenatis molestie. Nam porttitor a diam in placerat. Nam sem nisl, pulvinar eget leo non, dignissim rhoncus velit. Praesent suscipit ligula odio, id laoreet odio porta sed. Proin varius sed augue malesuada fermentum.</p>
            </div>
            <button 
                className="ui switchName"
                onClick={props.clicked}
            >改名字</button>  
        </div>
    )
}

export default cockpit;