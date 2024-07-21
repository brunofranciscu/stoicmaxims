import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


export default function PrivacyPolicy(){

    const navigate = useNavigate()

    return(
        <div className='h-full w-full relative grid place-content-center bg-gray-200 dark:bg-gray-800 px-5 py-20'>

            <div className="max-w-[1000px] mx-auto px-5  [&>h2]:font-[700] [&>h1]:font-[900] [&>h1]:uppercase [&>h1]:text-2xl relative text-gray-700 dark:text-gray-200">

                <button className="absolute left-0 -top-12" onClick={()=>navigate('/')}>
                    <span className='relative top-[1px]'>&lt;</span> back
                </button>
                
                <h1>Privacy Policy of Stoic Maxims Site</h1>
                <br />
                <em><strong>Last updated:</strong> July 13, 2024</em>
                <br />
                <br />
                <h2>Collection of Information</h2>
                <p>We do not collect any personally identifiable information through our website.</p>
                <br />
                <h2>Use of Information</h2>
                <p>We do not use personal information as we do not collect it.</p>
                <br />
                <h2>Sharing of Information</h2>
                <p>We do not share personal information with third parties as we do not collect it.</p>
                <br />
                <h2>Cookies</h2>
                <p>We do not use cookies to collect user's personal information.</p>
                <br />
                <h2>Third-party Links</h2>
                <p>Our website may contain links to third-party websites. This Privacy Policy does not apply to third-party sites, so we recommend that you review their privacy policies.</p>
                <br />
                <h2>Changes to this Policy</h2>
                <p>We reserve the right to modify this Privacy Policy at any time. Significant changes will be communicated through our website.</p>
                <br />
                <h2>Contact</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:bruno.f.c@icloud.com">bruno.f.c@icloud.com</a>.</p>

            </div>

        </div>
    )
}