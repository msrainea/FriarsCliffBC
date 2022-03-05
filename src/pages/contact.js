import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
        init("gjm0qa_R15Mt99PRO");

        const {
            register,
            handleSubmit,
            reset,
            formState: { errors }
        } = useForm();

        const toastifySuccess = () => {
            toast('Thank you, your message has been sent successfully!', {
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,  
              draggable: false,
              className: 'submit-feedback success',
              toastId: 'notifyToast'
            });
          };
    
        const onSubmit = async (data) => {
            const { name, email, message,mailinglist } = data;

            try{
                const templateParams ={
                    name,
                    email,
                    message,
                    mailinglist
                };

                await emailjs.send(
                    "service_mfpyrdx",
                    "template_6xzoh1d",
                    templateParams,
                    "gjm0qa_R15Mt99PRO"
                );
                reset();
                toastifySuccess();
            } catch(e) {
                console.log(e);
            }
            
        }

        return (
            <div className="mainContent">
                <div className="textContent">
                    <h2>Contact Us</h2>
                    Please get in touch if you have any questions or if you would like to join the mailing list to be notified of new events.
                    <br/><br/>
                    You can email us using this form, or message us on any of our social media accounts - the links are at the bottom of each page.
                </div>
                <div className="textContent">
                    <div id="contactForm">
                        <form id='contact-form' noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className='row formRow'>
                                <label htmlFor="name">Your name <span className="required">(required)</span></label>
                                <input aria-label="Enter your name" type='text' name='name' className='form-control formInput' placeholder='Name' {...register('name', {required: {value: true, message: 'Please enter your name'},maxLength: {valu: 30, message: 'Please use 30 characters or less'}})}></input>
                                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                            </div>
                            <div className='row formRow'>
                            <label htmlFor="email">Your email address: <span className="required">(required)</span></label>
                                <input
                                    aria-label="Enter your email address"
                                    type='email'
                                    name='email'
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                    className='form-control formInput'
                                    placeholder='Email address'
                                ></input>
                                {errors.email && (
                                    <span className='errorMessage'>Please enter a valid email address</span>
                                )}

                            </div>
                            <div className='row formRow'>
                            <label htmlFor="message">Your message:</label>
                                <textarea
                                    aria-label="Enter your message"
                                    rows={3}
                                    name='message'
                                    {...register('message', {
                                        required: false
                                    })}
                                    className='form-control formInput'
                                    placeholder='Message'
                                ></textarea>
                                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                            </div>
                            <div className='row formRow'>
                                <label htmlFor ="mailinglist">Add me to the mailing list: </label>
                                <select
                                    aria-label="Select No or Yes from the list"
                                    name='mailinglist'
                                    {...register('mailinglist', {
                                        required: false
                                    })}
                                    className='form-control formInput'
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                {errors.message && <span className='errorMessage'>Please select an option</span>}
                            </div>
                    
                            <button className='submit-btn' type='submit'>
                                Send message
                            </button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        )
    }

export default ContactForm;
