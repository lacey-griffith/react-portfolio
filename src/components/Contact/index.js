import React, {useState} from 'react';
import { validEmail } from '../../utils/helpers';
import Footer from '../Footer';

import sendButton from '../../assets/images/navImages/send.png'

function ContactForm(){
    const [error, setError] = useState('')
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;

    const [charCount, setCharCount] = useState(0)

    function handleFormChanges(e){
        console.log(e.target.name)
        if(e.target.name === 'email'){
            const isValid = validEmail(e.target.value)
            if(!isValid){
                setError('that email is invalid!')
            } else {
                setError('')
            }
        } else {
            if(!e.target.value.length){
                setError(`please enter your ${e.target.name}!`)
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
    function characterCount(e){
        if(e.target.name === 'message'){
            setCharCount(e.target.value.length)
            console.log((280 - charCount))
        }
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
            </div>
            {error && (
                <div className='form-group row justify-content-center'>
                    <div className='col-sm-10'>
                    <p className='error'>{error}</p>
                    </div>
                </div>
            )}
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
                <textarea name='message' className='form-control' rows='5' defaultValue={message} placeholder='Message' onBlur={handleFormChanges} onChange={characterCount}/>
                <p class={`fw-light fs-6 ${charCount >= 280 ? 'error' : ''}`}>Characters left: {280 - charCount}</p>
                </div>
            </div>
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