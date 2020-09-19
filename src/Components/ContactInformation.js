import React from 'react';

function ContactInformation(props) {
    return (
       
            <section className="contactInfo" >
                <div id="office-phone">
                    <h1>Call Us</h1>
                    <h2 class="normal" id="phone-number">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                        </svg>
                         <a href="tel: (000)-000-0000" class="click_to_call_href sclick_to_call_href_contactus"><span class="click_to_call">(000)-000-0000</span></a>               
                    </h2>    
                </div>                                    
                <dl class="dl-horizontal" id="office_hours">
                    <dt class="office_hours_today">Monday</dt>
                    <dd class="ole_hours_today">9AM-5PM</dd>
                    <dt>Tuesday</dt>
                    <dd>9AM-5PM</dd>
                    <dt>Wednesday</dt>
                    <dd>9AM-7PM</dd>
                    <dt>Thursday</dt>
                    <dd>9AM-5PM</dd>
                    <dt>Friday</dt>
                    <dd>9AM-5PM</dd>
                    <dt>Saturday</dt>
                    <dd>10AM-4PM</dd>
                </dl> 
                <hr/>
                <h1 style={{fontFamily:'fantasy',margin:'5%', color:"grey", marginTop:"25%"}}>RESERVATION</h1>         
            </section>                           
      
    );
}

export default ContactInformation;