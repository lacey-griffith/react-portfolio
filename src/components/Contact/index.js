import React, {useState} from 'react';


function ContactForm(){
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;

    function handleFormChanges(e){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(formState)
    }

    return(
        <section>
            <h1>Contact</h1>
            <form id='contact-form' onSubmit={handleFormSubmit}>
                <div>
                    {/* <label htmlFor='name'>Name:</label> */}
                    <input type='text' placeholder='Name' defaultValue={name} name='name' onChange={handleFormChanges}></input>
                </div>
                <div>
                    {/* <label htmlFor='email'>Email:</label> */}
                    <input type='text' placeholder='Email' defaultValue={email} name='email' onChange={handleFormChanges}></input>
                </div>
                <div>
                    {/* <label htmlFor='message'>Message:</label> */}
                    <textarea name='message' rows='5' defaultValue={message} placeholder='Message' onChange={handleFormChanges}/>
                </div>
            <button type='submit'>send</button>
            </form>
        </section>
    )
}

export default ContactForm;