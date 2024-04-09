import { Helmet } from 'react-helmet';
import { TbPasswordUser } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const handleregister = e =>{
      e.preventDefault();
      const data = new FormData(e.target);
      const email = data.get("email");
      const name = data.get("name")
      const password = data.get("password")
      const image = data.get("image")
      if(!name && !email && !password && !image){
          toast.error('please fill up the form')
          return
      }
      if(!name){
         toast.error('please fill up the name field')
         return
      }
      if(!email){
         toast.error('please fill up the email field')
         return
      }
      if(!image){
         toast.error('please fill up the image field')
         return
      }
      if(!password){
         toast.error('please fill up the password field')
         return
      }
      if(password.length < 6){
        toast.error('password must be 6 character')
        return
      }
      if( !/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
         toast.error('password must be uppercase and lowercase character')
         return
      }
      e.target.reset()
  }
  return (
    <div>
      <Helmet>
            <title>Registration page</title>
        </Helmet>
        <div className="hero bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">imageLink</span>
          </label>
          <input type="text" placeholder="imageurl"
          name ="image" 
          className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          className="input input-bordered"
          name="password" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className='flex justify-end text-blue-600'>login</div>
      </form>
    </div>
  </div>
</div>
  <ToastContainer></ToastContainer>
    </div>
  );
};

export default Registration;