import React, {useState} from 'react';
import { validEmail } from '../../utils/helpers';
import Footer from '../Footer';
import gitHub from '../../assets/images/GitHub-Mark-64px.png'
import linkedIn from '../../assets/images/LI-In-Bug.png'
import goodReads from '../../assets/images/goodreads-md.png'

import sendButton from '../../assets/images/navImages/send.png'

function ContactForm(){
    const [error, setError] = useState('')
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;

    function handleFormChanges(e){
        if(e.target.name === 'email'){
            const isValid = validEmail(e.target.value)
            if(!isValid){
                setError('Invalid email.')
            } else {
                setError('')
            }
        } else {
            if(!e.target.value.length){
                setError(`${e.target.name} is required!`)
            } else {
                setError('')
            }
        }
        if(!error){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(formState)
    }

    return(
        <>
        <section className='my-5'>
            <div className='container h-100 text-center'>
                <div className='row h-100 justify-content-center align-items-center'>
                    <div className='col-10 col-md-8 col-lg-6'>

            <div className='p-2'>
            <h1 id='about'>let's connect</h1>
            <p>lacey.griffith04@gmail.com <br/> 512.569.6826</p>
            <div className='row'>
            <div className='col'><a href='https://github.com/lacey-griffith' target='blank'><img src={gitHub} className='img-link-social' alt='GitHub logo'/></a></div>
            <div className='col'><a href='https://www.linkedin.com/in/lacey-griffith/' target='blank'><img src={linkedIn} className='img-link-social' alt='LinkedIn logo'/></a></div>
            <div className='col'><a href='https://www.goodreads.com/user/show/96106934-lacey'><img src={goodReads} className='img-link-social' alt='logo'/></a></div>
            </div>
            </div>

            <form id='contact-form' onSubmit={handleFormSubmit}>
            <div className="form-group row">
                <div className="col-sm-10">
                <label htmlFor='name' className='d-none'>Name</label>
                <input type='text' className='form-control' placeholder='Name' defaultValue={name} name='name' size='100' onBlur={handleFormChanges}></input>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <label htmlFor='email' className='d-none'>Email</label>
                <input type='text' className="form-control" placeholder='Email' defaultValue={email} name='email' onBlur={handleFormChanges}/>
                </div>
            </div>

            <div className='form-group row'>
                <div className='col-sm-10'>
                <label htmlFor='message' className='d-none'>Message</label>
                <textarea name='message' rows='5' defaultValue={message} placeholder='Message' onBlur={handleFormChanges}/>
                </div>
            </div>
            {error && (
                <div className='form-group row'>
                    <div className='col-sm-10'>
                    <p className='error'>{error}</p>
                    </div>
                </div>
            )}
            <div className="form-group row">
                <div className="col-sm-10">
                <button type="submit" className="btn"><img src={sendButton} alt='send button' className='sendButton'/></button>
                </div>
            </div>
            </form>
            
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default ContactForm;