import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

function Whatsapp() {
  return (
    <div className='whatsapp'>
      <a 
        href="https://api.whatsapp.com/send?phone=1111111111"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <RiWhatsappLine className='text-lime-600 text-4xl' />
      </a>
    </div>
  );
}

export default Whatsapp;
