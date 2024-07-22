import React from 'react';
import './CompoCss/WhyFlamingo.css';
import pinkFlamingo from '../../public/assets/PinkFlamingo.png';
import check from "../../public/assets/check.png";

const WhyFlamingo = () => {
    return (
        <div className="whyFlamingo-section">
            <div className="top-heading">
                <h2>Why PINK FLAMINGO ?</h2>
            </div>

            <div className="second-div">
                <div className="left">
                    <img src={pinkFlamingo} alt="Hero-img" />
                </div>

                <div className="right">
                    <ul>
                        <li><img src={check} alt="check-icon" />Spirituality can provide them with a framework for understanding the universe and their role in it</li>

                        <li><img src={check} alt="check-icon" />Coping with stress and uncertainty</li>

                        <li><img src={check} alt="check-icon" />Spirituality can be a path to personal growth and self-discovery</li>

                        <li><img src={check} alt="check-icon" />Spirituality can provide people with a sense of community and connection with others</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhyFlamingo
