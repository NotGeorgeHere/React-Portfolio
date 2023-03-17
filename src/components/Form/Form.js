import React, {useState} from 'react';
import './Form.css'


function Form(){

    //Creates state variable for form and setting them as empty, eventually the message state will be attached to an email API that can send messages to me
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessaage] = useState('');
    const [submitted, submitMessage] = useState('');

    //Fucntion that sets the state values as those in the form inputs, when submitted this can then be sent to an email
    function handleInputChange(event){
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name'){
            setName(inputValue);
        }
        else if (inputType === 'email'){
            setEmail(inputValue);
        }
        else{
            setMessaage(inputValue)
        }
        console.log(name);
        console.log(email);
        console.log(message);
    }

    //Function for when form is submitted, eventually this will use an email API to send me an email whenever one is sent
    function formSubmit(event){
        event.preventDefault();

        //Sets a tempoary submit message
        submitMessage(`Thank you for sending me a message, for now this is a placeholder. You entered: Name:${name}, Email: ${email}, Your message: ${message}`);

        //Resets messages to default blank values
        setName('');
        setEmail('');
        setMessaage('');
    }

    return (
    <form>
        <h3>Contact Me:</h3>
        <p>This is a placeholder</p>
        <div className="form-group">
            <label for="exampleInputEmail1">Your name:</label>
            <input type="text" className="form-control" name="name" value={name} placeholder="Enter name" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Your Email:</label>
            <input type="email" className="form-control" name="email" value={email} placeholder="Enter Email" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Your Message:</label>
            <input type="text-area" className="form-control" name="message" value={message} placeholder="Enter Message" onChange={handleInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={formSubmit}>Submit</button>
        <p className='submitMessage'>{submitted}</p>
        </form>    
    );
}

export default Form;