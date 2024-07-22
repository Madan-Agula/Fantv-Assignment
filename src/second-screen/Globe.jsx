import React from 'react';
import './globe.css';
import { ReactComponent as Earth } from '../assets/earth.svg';
import { ReactComponent as Person1 } from '../assets/circle-one.svg';
import { ReactComponent as Person2 } from '../assets/circle-two.svg';
import { ReactComponent as Person3 } from '../assets/circle-three.svg';
import { ReactComponent as Person4 } from '../assets/circle-five.svg';
import { ReactComponent as Person5 } from '../assets/circle-six.svg';
import { ReactComponent as Person6 } from '../assets/circle-seven.svg';
import { ReactComponent as Person7 } from '../assets/circle-nine.svg';
import { ReactComponent as Person8 } from '../assets/circle-eleven.svg';
import { ReactComponent as Emoji1 } from '../assets/emoji1.svg';
import { ReactComponent as Emoji2 } from '../assets/emoji2.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';
import { ReactComponent as Person9 } from '../assets/circle-sixteen.svg';
import { ReactComponent as Person10 } from '../assets/circle-seventeen.svg';
import { ReactComponent as Person11 } from '../assets/circle-fourteen.svg';

const Globe = () => {
    return (
        <div className='parent-container'>
            <div className='globe-container'>
                <div className='inner-rectangle'>
                    <div className='circle-one'>
                        <Person1 />
                    </div>
                    <div className='circle-two'>
                        <Person2 />
                    </div>
                    <div className='circle-three'>
                        <Person3 />
                    </div>
                    <div className='circle-four'>
                        <div className='circle-four-inner'></div>
                    </div>
                    <div className='circle-five'>
                        <Person4 />
                    </div>
                    <div className='circle-six'>
                        <Person5 />
                    </div>
                    <div className='circle-seven'>
                        <Person6 />
                    </div>
                    <div className='circle-eight'>
                        <div className='circle-eight-inner'></div>
                    </div>
                    <div className='circle-nine'>
                        <Person7 />
                    </div>
                    <div className='circle-ten'>
                        <div className='circle-ten-inner'></div>
                    </div>
                    <div className='circle-eleven'>
                        <Person8 />
                    </div>
                    <div className='circle-twelve'>
                        <Emoji1 />
                    </div>
                    <div className='circle-thirteen'>
                        <Heart />
                    </div>
                    <div className='circle-fourteen'>
                        <Person11 />
                    </div>
                    <div className='circle-fifteen'>

                    </div>
                    <div className='circle-sixteen'>
                        <Person9 />
                    </div>
                    <div className='circle-seventeen'>
                        <Person10 />
                    </div>
                    <div className='circle-eighteen'></div>
                    <div className='circle-nineteen'>
                        <Emoji2 />
                    </div>
                    <div className='dotted-line-around'>
                        <div className='inner-inner-rectangle'>
                            <Earth />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Globe;
