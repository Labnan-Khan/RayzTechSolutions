import React, { useState } from 'react'
import './contactus.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
import { CiMail } from 'react-icons/ci'
import { IoCopyOutline } from 'react-icons/io5'
import { FiPaperclip, FiPhoneCall } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import emailjs from "@emailjs/browser";
function ContactUs() {
    const [budget, setBudget] = useState("Up to $10k");

    const [copyEmailIcon, setCopyemailIcon]= useState(false)
    const copyemail= ()=>{
        
        navigator.clipboard.writeText("info@rayztechsolutions.com")
            .then(()=>{
                setCopyemailIcon(true)
                setTimeout(()=>{
                    setCopyemailIcon(false)
                },1000)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            setSelectedFile(file);
            if(file.name.length > 10){
                setSelectedFileName(file.name.substring(0,10) +"...")} 
            else{ setSelectedFileName(file.name)}
        }else{
            setSelectedFile(null);
            setSelectedFileName("")
        }
    }

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();

        setLoading(true);

        try{
            await emailjs.sendForm(
                "service_fubz5uf", "template_7dtbv8s", e.target, "SGwhUM3EeXq4WG-KM" 
            );
            e.target.reset();
            setSelectedFile(null);
            setSelectedFileName("");
            setBudget("Up to $10k")
        }catch (error){
            console.error("emailjs error", error)
        } finally{
            setLoading(false)
        }
    }

  return (
    <div className='contactus'>
        <div className='contactusSec'>
            <div className='contactsecLeft'>
                <div className='leftfirstdiv'>
                    <div className='fimg'><span><FaLinkedinIn /></span></div>
                    <div>
                        <h1>Asfand Kakar</h1>
                        <p>Founder & CEO</p>
                    </div>
                </div>

                <div className='leftseconddiv'>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>We will respond to you within 12 hours</p>
                    </div>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>We’ll sign an NDA if requested</p>
                    </div>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>A free 3-day trial work</p>
                    </div>
                </div>

                <div className='lefttherddiv'>
                    <h6>Project inquires</h6>
                    <div className='lefttherddivUpSection'>
                        <div>
                            <span><CiMail /></span>
                            <p>info@rayztechsolutions.com</p>
                        </div>
                        <span onClick={copyemail}>{copyEmailIcon? <IoMdCheckmark />: <IoCopyOutline />}</span>
                    </div>
                    <div>
                        <span><FiPhoneCall /></span>
                        <p>Book a calll</p>
                    </div>
                </div>
            </div>

            <div className='contactsecright'>
                <h1>Tell us about your project</h1>
                <form onSubmit={handleSubmit}>
                    <div className='firstInputSec'>
                        <div>
                            <input type="text" name='user_fullName' id='fullName' placeholder=' ' required/>
                            <label htmlFor="fullName">Full name</label>
                        </div>

                        <div>
                            <input type="text" name='user_email' id='email1' placeholder=' ' required/>
                            <label htmlFor="email1">Corporate email</label>
                        </div>
                    </div>
                    <div className='seconfInputSec'> 
                        <p>what is your budget?</p>
                        <div className='priceSection'>
                            <span className={`${budget == "Up to $10k"? "active": ""}`} onClick={()=>setBudget("Up to $10k")}>Up to $10k</span>
                            <span className={`${budget == "$10k-$20k"? "active": ""}`} onClick={()=>setBudget("$10k-$20k")}>$10k-$20k</span>
                            <span className={`${budget == "$20k-$50k"? "active": ""}`} onClick={()=>setBudget("$20k-$50k")}>$20k-$50k</span>
                            <span className={`${budget == "$50k-$100k"? "active": ""}`} onClick={()=>setBudget("$50k-$100k")}>$50k-$100k</span>
                            <span className={`${budget == ">$100k"? "active": ""}`} onClick={()=>setBudget(">$100k")}>{">"}$100k</span>
                        </div>
                        <input type="hidden" name="user_budget" value={budget}/>
                        
                        <div className='aboutPsec'>
                            <input type="text" name='user_aboutProject' id='aboutProject' placeholder=' ' required/>
                            <label htmlFor="aboutProject">About project</label>
                        </div>
                        <div className='lastSec'>
                            <p>Have an idea? Let’s build it together.</p>
                            <button><span><BsArrowRightShort /></span>{loading ? "Sending..." : "Submit"}</button>
                        </div>
                    </div>
                </form>
                {/* <h1>kuch b</h1> */}
                    
                
            </div>
        </div>
    </div>
  )
}

export default ContactUs
