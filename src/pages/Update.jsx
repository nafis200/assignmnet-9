import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import auth from "../../firebase";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { users } = useContext(AuthContext);
  const Auth = auth;
  const datas = auth.currentUser;
  console.log("hi i am update", datas);

  let names = "";
  let emails = "";
  let verified = "";
  let images = "";
  let id = "";
  if (users) {
    const { displayName, email, emailVerified, photoURL, uid } = users;
    names = displayName;
    emails = email;
    verified = emailVerified;
    images = photoURL;
    id = uid;
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: names,
      image: images,
      email: emails
    }
  });

  const handleRegistration = (data) => {
    let update_name = "";
    let update_image = "";
    if (data) {
      const { name, image } = data;
      update_name = name;
      update_image = image;
      console.log(update_name, update_image);
    }
    updateProfile(auth.currentUser, {
      displayName: update_name,
      photoURL: update_image
    })
      .then(() => {
        toast.success("successfully update");

        location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update page</title>
      </Helmet>

      <section>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="lg:text-5xl md:text-3xl text-xl font-bold mb-5 -ml-8 lg:ml-0 md:ml-0">
                Update Profile
              </h1>
              <img
                src={images}
                className="rounded-full w-[200px] h-[200px] lg:ml-[70px]"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -ml-5 lg:ml-0 md:ml-0">
              <form
                onSubmit={handleSubmit(handleRegistration)}
                className="card-body"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "input field is required",
                      minLength: { value: 3, message: "min length3" }
                    })}
                    type="text"
                    placeholder="email"
                    name="name"
                    className={`input input-bordered`}
                  />
                  {errors.name && (
                    <p className="text-red-600 font-bold py-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">images</span>
                  </label>
                  <input
                    {...register("image", {
                      required: "input field is required"
                    })}
                    type="text"
                    placeholder="image link"
                    name="image"
                    className="input input-bordered"
                  />
                  {errors.image && (
                    <p className="text-red-600 font-bold py-2">
                      {errors.image.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Update;
