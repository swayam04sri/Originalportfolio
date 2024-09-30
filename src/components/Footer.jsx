import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Ensure the correct imports

export default function Footer() {
    return (
        <div>
            <hr />
            <footer className=' py-12 '>
                <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaFacebook size={24}  />
                            <FaLinkedin size={24}  />   {/* Replace FaFacebookSquare with FaFacebook */}
                            <FaInstagram size={24}  />
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            
                            <p className='text-smm'>
                            &copy;  2024 My Portfolio . All rights reserved.
                            </p>
                            <p className='text-sm'>
                                Supportive Partner Ansh 
                            </p>

                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}
