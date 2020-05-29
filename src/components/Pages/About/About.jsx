import React from 'react';
import Image from '../../../images/slide1-kopi.jpg';

export default function About(props) {
    return (
        <>
            <div>
                <img src={Image} alt="bread" />
                <h2>Login</h2>
                <section>
                    <p>This is the React Login page.</p>
                </section>
            </div>
        </>
    )
}
