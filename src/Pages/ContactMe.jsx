import React from 'react'

const ContactMe = () => {
  return (
    <div 
      style={{
        background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
        minHeight: "100vh",
        margin: "0",
        padding: "30px 50px",
        display: "flex",
        justifyContent: "center",   // horizontal center
        alignItems: "center",       // vertical center
        flexDirection: "column"     // stack heading + card
      }}
    >

      <h2 className='text-center mb-3 text-white' style={{ fontWeight: 'bold' }}>
        CONTACT US
      </h2>

      <div 
        className="card p-5 text-white"
        style={{
          backgroundColor: "#3e4044",
          width: "100%",
          maxWidth: "500px"   // keeps it centered & responsive
        }}
      >

        <form>
          <input type="text" className="form-control" placeholder="Your name here" /><br />
          <input type="email" className="form-control" placeholder="Your email here" /><br />
          <textarea className="form-control" rows="4" placeholder="Your message here"></textarea>
          <button type="submit" className="btn btn-warning w-100 mt-2">Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default ContactMe