
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet';

const Registration = () => {
  
   const {register,handleSubmit,reset,formState:{errors}} = useForm()

   const handleRegistration = (data)=>{
         console.log(data); 
         reset()
   }

  return (
      <div>
        <Helmet>
            <title>Registration page</title>
        </Helmet>
        <div className="hero min-h-screen ">
      <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold mb-5 -ml-8 lg:ml-0 md:ml-0">Registration now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -ml-5 lg:ml-0 md:ml-0">
      <form  onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name',{
             required: 'input field is required',
             minLength:{value:3,message:'min length3'}
          })} type="text" placeholder="name" name="name" className={`input input-bordered`}   />
           {errors.name && <p className="text-red-600 font-bold py-2">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ImageUrl</span>
          </label>
          <input {...register('image',{
             required: 'input field is required'
          })} type="text" placeholder="imageLink" name="image" className={`input input-bordered`}   />
           {errors.name && <p className="text-red-600 font-bold py-2">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  {...register('email',{
             required: 'input field is required'
          })} type="email" placeholder="email" name="email" className="input input-bordered"  />
          {errors.email && <p className="text-red-600 font-bold py-2">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register('pass',{
            required:'password is required',
            minLength:{value: 6, message:'password must be at least 6 character'},
            validate: (value) =>
            /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value) || 'Password must contain at least one uppercase and lowercase letter',
          })} type="password" placeholder="password" name="pass"  className="input input-bordered"  />
          {errors.pass && <p>{errors.pass.message}</p>}
        </div>
        
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
          
        </div>
      </form>

    </div>
  </div>
</div>
      </div>
    );
};

export default Registration;
