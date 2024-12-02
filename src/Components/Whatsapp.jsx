import React from 'react'

function Whatsapp() {
    return (
        <>
            <div className='whatsapp'>
                <Link to="https://api.whatsapp.com/send?phone=1111111111">
                    <RiWhatsappLine />
                </Link>
            </div>
        </>
    )
}

export default Whatsapp