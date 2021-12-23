import React, { Component } from 'react'
import 'antd/dist/antd.css';
import contactimg  from '../Contact/images_contact/bg-01.jpg'

export class ContactTitle extends Component {
    render() {
        return (
            <section class="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${contactimg})` }}>
            <h2 class="ltext-105 cl0 txt-center">
                Contact
            </h2>
            </section>	
        )
    }
}

export default ContactTitle
