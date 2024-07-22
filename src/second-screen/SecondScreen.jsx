import React from 'react';
import './secondScreen.css';
import Globe from '../second-screen/Globe'

const SecondScreen = () => {
    return (
        <div className="second-screen-container">
            <div className='second-line1-container'>
                FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation
            </div>
            <div className='second-line2-container'>
                FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community-driven consumption
            </div>
            
             <Globe />
      
            <div className='second-line4-container'>
                <div className='second-line4-s1'>
                    <div className='p1-text'>Content Nodes</div>
                    <div className='p2-text'>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</div>
                    <div className='btn-deploy'>Deploy</div>
                </div>
                <div className='second-line4-s2'>
                    <div className='second-line4-s2-p1'>Orchestrators</div>
                    <div className='second-line4-s2-p2'>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</div>
                    <div className='second-line4-s2-p3'>Coming soon</div>
                </div>
                <div className='second-line4-s3'>
                    <div className='second-line4-s2-p1'>Validators</div>
                    <div className='second-line4-s2-p2'>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</div>
                    <div className='second-line4-s3-p3'>Coming soon</div>
                </div>
            </div>
        </div>
    );
};

export default SecondScreen;
