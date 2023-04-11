import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'


function Form(){

    //Creates state variable for form and setting them as empty, eventually the message state will be attached to an email API that can send messages to me
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessaage] = useState('');
    const [submitted, submitMessage] = useState('');

    const form = useRef();

    //Fucntion that sets the state values as those in the form inputs, when submitted this can then be sent to an email
    function handleInputChange(event){
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'user_name'){
            setName(inputValue);
        }
        else if (inputType === 'user_email'){
            setEmail(inputValue);
        }
        else{
            setMessaage(inputValue)
        }
    }

    //Function for when form is submitted, eventually this will use an email API to send me an email whenever one is sent
    function formSubmit(event){
        event.preventDefault();

        emailjs.sendForm('service_9ehm4ju', 'template_creggoc', form.current, '54L4Ux2YP8v_lU7-0')
            .then((result) => {
                console.log(result.text);
                }, (error) => {
                console.log(error.text);
            });

        //Sets a tempoary submit message
        submitMessage(`Message sent ${name}`);

        //Resets messages to default blank values
        setName('');
        setEmail('');
        setMessaage('');
    }

    return (
    <form className="contactForm" ref={form}>
        <h3 className='contacth3'>Contact Me:</h3>
        <div className="form-group">
            <label for="exampleInputEmail1">Your name:</label>
            <input type="text" className="form-control" name="user_name" value={name} placeholder="Enter name" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Your Email:</label>
            <input type="email" className="form-control" name="user_email" value={email} placeholder="Enter Email" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Your Message:</label>
            <textarea type="text-area" className="form-control" name="message" value={message} placeholder="Enter Message..." onChange={handleInputChange} rows="3"/>
        </div>
        <div className='formButtonCustom'>
        <button type="submit" className="btn btn-primary" value="Send" onClick={formSubmit}>Submit</button>
        </div>
        <h5 className='submitMessage'>{submitted}</h5>
        </form>    
    );
}

export default Form;