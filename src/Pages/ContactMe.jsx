import React from 'react'

const ContactMe = () => {
  return (
    
    <div 
      style={{
       background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
      alignItems:'center',
       minHeight:"100vh",
       margin :"10px",
      padding :"30px 50px"
      
    }}
    >

         <h2 className='text-center mb-3' style={{ fontWeight: 'bold'}}>
          CONTACT US </h2>

        <div className="card p-5 text-white" style={{ backgroundColor:"#3e4044"}}>

        <form className='w-100'>
      <input type="text" className="form-control" placeholder="Your name here"/><br />
      <input type="email" className="form-control" placeholder="Your email here"/><br />
      <textarea className="form-control" rows="4" placeholder="Your message here"></textarea>
      <button type="submit" className="btn btn-warning w-100 mt-2">Send Message</button>
      </form>
    </div>
</div>
  )
}

export default ContactMe
