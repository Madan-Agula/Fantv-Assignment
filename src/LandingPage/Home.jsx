import React from 'react';
import './home.css';
import { ReactComponent as Img1 } from '../assets/image1.svg';
import { ReactComponent as Img2 } from '../assets/image2.svg';
import { ReactComponent as Img3 } from '../assets/image3.svg';
import { ReactComponent as Img4 } from '../assets/image4.svg';
import { ReactComponent as Img5 } from '../assets/image5.svg';
import { ReactComponent as Img6 } from '../assets/image6.svg';

const Home = () => {
    return (
        <div className="headerContainer">
            <div className="line1-container"></div>
            <div className="line2-container">
                <div className="line2-s1-cont"></div>
                <div className="line2-s2-cont">
                    EMPOWERING THE DIGITAL ERA:
                </div>
                <div className="line2-s3-cont"></div>
            </div>
            <div className="line3-container">
                <div className="line3-s1-cont"></div>
                <div className="line3-s2-cont"></div>
                <div className="line3-s3-cont">
                    DECENTRALIZING ENTERTAINMENT
                </div>
                <div className="line3-s4-cont"></div>
                <div className="line3-s5-cont"></div>
            </div>
            <div className="line4-container">
                <div className="line4-s1-cont">
                    <div className="line4-s1-cont-line-start"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                    <div className="line4-s1-cont-line"></div>
                </div>
                <div className="line4-s2-cont"></div>
                <div className='line4-s3-cont'>
                        <div className='line4-s3-s1-cont'>
                            Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer
                        </div>
                        <div className='line4-s3-s2-cont'>
                            <div className='line4-s3-s2-s1'></div>
                            <div className='line4-s3-s2-s2'>
                                and Cheaper Access
                            </div>
                        </div>
                        <div className='line4-s3-s2-cont'>
                            <div className='line4-s3-s2-s1'></div>
                            <div className='line4-s3-s2-s2'>
                                <button className='line4-btn'>Coming Soon</button>
                            </div>
                        </div>
                        <div className='line4-s3-s2-cont'>
                            <div className='line4-s3-s2-s1'></div>
                            <div className='line4-s3-s2-s2'>
                            </div>
                        </div>
                    </div>

                    <Img1 className='img1-cont' />
                    <Img2 className='img2-cont' />
                    <Img3 className='img3-cont' />
                    <Img4 className='img4-cont' />
                    <Img5 className='img5-cont' />
                    <Img6 className='img6-cont' />
            </div>
            <div className="line5-container">
                <div className='line5-s1-cont'>
                    <div className='text-1'>
                        No. of Node Operators
                        <div className="plus-sign">
                            <div className="line vertical"></div>
                            <div className="line horizontal"></div>
                        </div>
                    </div>
                    <div className='text-2'>2000</div>
                </div>
                <div className='line5-s1-cont'>
                    <div className='text-1'>
                        <div>

                            Data Transferred in TB <span className='sp1-text1'>
                                (last 30 days)
                            </span>
                        </div>
                        <div className="plus-sign">
                            <div className="line vertical"></div>
                            <div className="line horizontal"></div>
                        </div>
                    </div>
                    <div className='text-2'>12,000</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
