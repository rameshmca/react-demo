import React, { Component } from 'react';
        import UserInput from './UserInput/UserInput';
        import UserOutput from './UserOutput/UserOutput';
        import './App.css';
        class App extends Component {

        state = {
            usernames: [
                {username: "Ramesh Kumar"},
                {username: "John Deo"},
                {username: "Smith"},
                {username: "Steve"},
            ]
        }

        manipulateState = (newusername) => {
            this.setState({
                usernames:[
                    {username: newusername},
                    {username: "John Deo"},
                    {username: "Smith"},
                    {username: "Steve"},
                ]
            });
        }

        nameChangedHandler = (event) => {
            this.setState({
                usernames:[
                    {username: event.target.value},
                    {username: "John Deo"},
                    {username: "Smith"},
                    {username: "Steve"},
                ]
            });
        }
        

    render() {
        return (
            <div className="App">
                <ul>
                    <li>Create TWO new components: UserInput and UserOutput</li>
                    <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                    <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
                    <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
                    <li>Add state to the App component (=&gt; the username) and pass the username to the UserOutput component</li>
                    <li>Add a method to manipulate the state (=&gt; an event-handler method)</li>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                    <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
                </ul>
                <UserInput name="Ramesh"
                    changed={this.nameChangedHandler} />
                <UserOutput 
                    username={this.state.usernames[0].username}
                    click={this.manipulateState.bind(this,'Ramesh !!!')} />
                <UserOutput 
                    username={this.state.usernames[1].username}
                     />
            </div>
            );
    }
}

export default App;
