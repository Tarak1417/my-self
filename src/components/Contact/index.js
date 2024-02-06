import './index.css'
import React from 'react'
import { Linkedin, Mail,Github, CircleUserRound, } from 'lucide-react'




const Contact = () => (
    <div className='contactContai'>
        
        <h1 className='contactCoStyle'>contact</h1>
        <p className='contactGetIm'>Get In Touch </p>
        <div className='ContactVasuAlign'>
            <a href="mailto:achantatarak@gmail.com" className='contactGmail1'>
            <Mail />
        </a>
        </div>
        <div className='ContactVasuAlign'>
       <a href='https://api.whatsapp.com/send?phone=+91 8008434124' > <CircleUserRound className='contactGmail1'/> </a>
       </div>
       <div>
       <div className='ContactVasuAlign'> 
       <a href=" https://www.linkedin.com/in/tarak-achanta-983b30277/"><Linkedin className='contactGmail1' /></a>
       </div>
       <div className='ContactVasuAlign'>
       <a href="https://github.com/Tarak1417"><Github className='contactGmail1' /></a>
       </div>
       </div>
       
        
        <div className='contactFooterelement'>
        <div className="contactContainerEle">
        <div className='ContactVasuAlignee'>
            <a href="mailto:achantatarak@gmail.com" className='contactGmail1ee'>
            <Mail />
        </a>
        </div>
        <div className='ContactVasuAlignee'>
      
       <a href="https://api.whatsapp.com/send?phone= +91 8008434124">  <CircleUserRound className='contactGmail1ee'/></a>
       </div>
       
       <div className='ContactVasuAlignee'> 
       <a href=" https://www.linkedin.com/in/tarak-achanta-983b30277/"><Linkedin className='contactGmail1ee' /></a>
       </div>
       <div className='ContactVasuAlignee'>
       <a href="https://github.com/Tarak1417"><Github className='contactGmail1ee' /></a>
       </div>
       
       </div>


          <h1 className='sectonfootele'>About</h1>
          <p className='minuteDerAa'>ph : +91 8008434124 </p>
          <p className='minuteDerAa'>Gmail : achantatarak@gmail.com</p>
          <p className='minuteDerAa'>linkdin:https://www.linkedin.com/in/tarak-achanta-983b30277/</p>
        <p className='minuteDerAa'>github :https://github.com/Tarak1417</p>
        </div>
        </div>
    )


export default Contact