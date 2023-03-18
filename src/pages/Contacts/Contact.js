import './Contact.css';
import Form from '../../components/Form/Form';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';

function Contact(){
    return (
        <div className='contactFormOverall'>
            <Form />
            <h3 className='contacth3More'>Or view me on here</h3>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn link" className="image"></img></a>
                    </div>
                    <div className="col">
                        <a href="https://github.com/NotGeorgeHere" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub link" className="image"></img></a>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <a href = "mailto:ryder.george20@gmail.com" rel="noreferrer" target="_blank" className="customLink">ryder.george20@gmail.com</a>
                    </div>
                    <div className="col">
                        <a href = "https://drive.google.com/file/d/1DG4CpTgYuoRnuFvrZi42Vdui5u0uNaNJ/view?usp=sharing" target="_blank" rel="noreferrer" className="customLink">CV</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Contact;