import React from 'react'
import Validation from '../../img/Validation.PNG';
import CpuStressTest from '../../img/CpuStressTest.PNG';
import NetworkLaytency from '../../img/NetworkLaytency.PNG';

function AnomalyDetection() {
    return (
        <>
            <div className="app">
                {/* <FaCode style={{ fontSize: '4rem' }} /><br /> */}
                {/* <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span> */}

                {/* <div img src={Developer}></div> */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div>
                    <img src = {Validation} className="Validation" alt="Validation"/>
                </div>

                <br />

                <div>
                    <img src = {CpuStressTest} className="CpuStressTest" alt="CpuStressTest"/>
                </div>

                <br />

                <div>
                    <img src = {NetworkLaytency} className="NetworkLaytency" alt="NetworkLaytency"/>
                </div>

                <br />

            </div>
            {/* <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div> */}
        </>
    )
}

export default AnomalyDetection
