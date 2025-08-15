import React from 'react'
import Headings from './Headings'
import Contact_Form from './Contact_Form'

function ContactUs() {
    return (
        <div>
            <Headings
                head={"Contact Us"}
                sub1={"Connect with Us: Let's Discuss Your"}
                sub2={"Digital Marketing Needs"} />
                <Contact_Form />
        </div>
    )
}

export default ContactUs