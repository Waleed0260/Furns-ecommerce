import React, {useState} from 'react'
import Layout from '../components/Layout'
import { useSession, signIn } from 'next-auth/react'


const signin = () => {

  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const session = useSession();

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  console.log("Session", session)




  return (
    <Layout>
        <div className="w-screen h-[250px] bg-[#ccfbf1] flex flex-col justify-center items-center gap-3 mb-4">
        <h2 className="text-5xl font-bold">LOGIN</h2>
        <p>HOME/SIGNIN</p>
      </div>
      <div className='flex justify-center items-center my-12'>
      <div className='h-[400px] w-[500px] shadow-2xl flex flex-col items-center'>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-3 my-6'>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className='h-[40px] w-[430px] border-2'
      />
      <button type="submit" className='bg-[#f97316] h-[45px] w-[430px] text-white hover:bg-[#44403c] duration-300 my-4'>SIGN IN</button>
    </form>
        <div className='flex flex-col w-[430px] gap-2 items-center justify-center my-[-20px]'>
        <button className='w-[100%] h-[45px] bg-[#44403c] hover:bg-[#ccfbf1] hover:text-[#44403c] text-white duration-300' onClick={signIn}>Signin with Goggle</button>
        <button className='w-[100%] h-[45px] bg-[#ccfbf1] hover:bg-[#44403c] hover:text-[#ccfbf1] duration-300'>Forget Password</button>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default signin
