import React from 'react';
import '../Components/SertifikatPage.css'
import sertif1 from '../Assets/Images/sertif1.png'
import sertif2 from '../Assets/Images/sertif2.png'

const Sertifikat = () => {
    return (
        <div className="container1">
            {/* Card potrait */}
            <div className="card portrait">
                <img src={sertif2} alt="Certificate 1" />
                <div className="content1">
                    <h3>Certificate 1</h3>
                    <p>Description of Certificate 1.</p>
                </div>
            </div>

            {/* Card landscape */}
            <div className="card landscape">
                <img src={sertif1} alt="Certificate 2" />
                <div className="content1">
                    <h3>Certificate 2</h3>
                    <p>Description of Certificate 2.</p>
                </div>
            </div>
        </div>
    );
}

export default Sertifikat;
