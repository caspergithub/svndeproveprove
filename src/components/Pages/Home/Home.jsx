import React from 'react';
import Style from '../../Main/Main.module.scss'
import Image from '../../../images/slide1.jpg'

export default function Home(props) {
    return (
        <div>
            <div>
                <div>
                    <img src={Image} alt="bread" />
                    <h2 className={Style.lobsterfont}>Vi elsker at lave brød</h2>
                </div>
            </div>
            <section>
                <h3 className={Style.lobsterfont}>Vi skaber lækkert! brød</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias aliquam maiores quo, quaerat quibusdam quae consectetur velit ad sequi aliquid accusamus recusandae iste assumenda ipsa vero minima necessitatibus obcaecati. Sunt!</p>
            </section>
        </div>
    )
}
