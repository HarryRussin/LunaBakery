import { BiPaperPlane } from 'react-icons/bi'
import {useState} from 'react'
import {
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillLinkedin,
} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import Link from 'next/link'

function Footer() {

  const [newsletter, setnewsletter] = useState('')

  return (
    <footer id='contact' className="bg-cgrey-dark px-20 pt-20 pb-12 flex flex-col space-y-24">
      {/* Top layer Email and Socials */}
      <section className="flex items-end space-x-24">
        {/* Email */}
        <div className="">
          <h3 className="font-mono text-3xl mb-4 font-semibold text-white">
            JOIN OUR MAILING LIST
          </h3>
          <div className="relative w-fit">
            <form onSubmit={(e)=>{e.preventDefault();alert("You've Subscribed to our Bakery Newsletter!");setnewsletter('')}}>
              <input
                type="email"
                value={newsletter}
                onChange={(e)=>setnewsletter(e.target.value)}
                required
                placeholder="Your Email"
                className="text-cgrey-light focus:outline-none transition-all duration-150 focus:border-white focus:text-white focus:placeholder:text-white w-[45vw] pl-4 bg-transparent font-semibold border-b-[3px] py-1 border-cgrey-light"
              />
              <button type='submit'><BiPaperPlane className="absolute text-accent-light w-6 h-6 top-1 right-4" /></button>
            </form>
          </div>
        </div>

        {/* Socials */}
        <div className="flex space-x-8 text-cgrey-light ">
          <AiOutlineInstagram className="w-16 h-16" />
          <AiFillTwitterSquare className="w-16 h-16" />
          <AiOutlineFacebook className="w-16 h-16" />
          <AiFillLinkedin className="w-16 h-16" />
        </div>
      </section>

      {/* COPYRIGHT AND MORE LINKS */}
      <section className="flex space-x-64 items-center">
        {/* LOGO */}
        <div className="">
          <h4 className="font-abril text-3xl h-7 font-semibold text-white">
            LUNA
          </h4>
          <p className="text-cgrey-light">
            The Artisanal Experience You Deserve.{' '}
          </p>
        </div>

        {/* Links */}
        <div className="text-cgrey-light flex flex-col space-y-2">
          <p>About</p>
          <p>Jobs</p>
          <p>Events</p>
        </div>

        <div className="text-cgrey-light flex flex-col space-y-2">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </section>
      {/* Copyright */}
      <div className="text-cgrey-light">
        <p>Website Design & Development by Harry Russin</p>
        <p className='flex items-end space-x-2'> <BsCodeSlash className='h-5 text-cgrey-light'/> <Link href={'/'}><span className='text-accent-light hover:underline'>harryrussindev.com</span></Link></p>
      </div>
    </footer>
  )
}

export default Footer
