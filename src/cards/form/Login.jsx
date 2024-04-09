
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login page</title>
            </Helmet>
            <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
              Login now!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                  <input
                    type= "password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">login</button>
              </div>
              <div className="flex justify-end text-blue-600 underline"> <NavLink to="/registration">Register</NavLink> </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;