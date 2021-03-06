import React from 'react';

import {Players} from './../api/player';

export default class AddPlayer extends React.Component
{
    handleSubmit(e)
    {
        let name = e.target.playerName.value;
        e.preventDefault();

        if(name)
        {
            e.target.playerName.value = '';

            Players.insert({
                name: name,
                score: 0
            });
        }
    }

    render()
    {
        //We need to manually preserve the binding
        //since we are passing a method to an event handler
        return(
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}