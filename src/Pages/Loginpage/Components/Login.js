import { useEffect, useState } from "react";
import "../Style/style.css";
import Swal from "sweetalert2";
import { useNavigate, useRoutes } from "react-router-dom";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function Login() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("hi there!");
  const [error, setError] = useState(false);
  const [captcha, setCaptcha] = useState({
    first: 0,
    second: 0,
    result: 0,
  });

  useEffect(() => {
    const first = Math.floor(Math.random() * 19) + 1;
    const second = Math.floor(Math.random() * 19) + 1;
    const result = first + second;
    setCaptcha({
      first: first,
      second: second,
      result: result,
    });
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin");
    }
  }, []);

  const onLogin = async (e) => {
    e.preventDefault();
    if (e.target.captcha.value != captcha.result) {
      Toast.fire({
        title: "Wrong Answer",
        icon: "error",
      });
      //alert("Wrong Answer");
      const first = Math.floor(Math.random() * 19) + 1;
      const second = Math.floor(Math.random() * 19) + 1;
      const result = first + second;
      setCaptcha({
        first: first,
        second: second,
        result: result,
      });
      return;
    }
    const data = {
      nia: e.target.nia.value,
      pass: e.target.pass.value,
    };

    if (!(data.nia == "" || data.pass == "")) {
      setError(true);
      setMsg("Signin...");
      if (typeof window !== "undefined") {
        localStorage.setItem("username", data.nia);
      }
      Toast.fire({
        title: "login success",
        icon: "success",
      });
      navigate("/admin/dashboard");
    } else {
      setError(true);
      setMsg("NIA jo Password Angku Kosong!");
      Toast.fire({
        title: "NIA jo Password Angku Kosong!",
        icon: "error",
      });
    }
  };
  return (
    <div className="bg-[#303170] h-screen flex items-center justify-center h-screen flex-col ">
      <h2 className="text-white font-hammersmit-one text-[50px] tracking-widest text-outline">
        LOGIN
      </h2>
      <h2 className="text-white text-center font-gugi text-[20px] m-5 tracking-widest text-outline">
        UNIT KEGIATAN ROBOTIKA UNIVERSITAS NEGERI PADANG <br />
        (UKRO-UNP)
      </h2>
      <div className="container w-96 drop-shadow-[0_15px_15px_rgba(255,255,255,1)] bg-[#212257] rounded-md">
        <div className="flex justify-center items-center pt-5 gap-5">
          <img
            src="/admin/image/logo UNP.png"
            width={48}
            height={48}
            alt="logo unp"
          />
          <img
            src="/admin/image/robotik.png"
            width={32}
            height={51}
            alt="logo ukro"
          />
        </div>
        <form
          className="flex justify-center items-center flex-col flex-wrap mt-5"
          onSubmit={onLogin}
          method="post"
        >
          <h5
            className={
              error
                ? "text-center text-sm text-red-500 opacity-100 mb-2"
                : "text-center text-sm text-white opacity-0 mb-2"
            }
          >
            {msg}
          </h5>
          <input
            type="text"
            id="nia"
            name="nia"
            placeholder="NIA"
            className=" h-9 w-72 placeholder:text-white focus:text-black focus:placeholder:text-black px-4 text-white focus:outline-slate-100 bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl focus:bg-opacity-100 bg-opacity-10 border border-gray-50"
            autoComplete
          />
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Password angku"
            className=" mt-3 h-9 w-72 placeholder:text-white px-4 focus:text-black focus:placeholder:text-black text-white focus:outline-slate-100 bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl focus:bg-opacity-100 bg-opacity-10 border border-gray-50"
          />
          <div className="mt-3 text-white">
            bara {captcha.first} ditambah {captcha.second}
          </div>
          <input
            type="text"
            id="captcha"
            name="captcha"
            placeholder="Answer"
            className=" mt-2 h-9 w-72 placeholder:text-white px-4 focus:text-black focus:placeholder:text-black text-white focus:outline-slate-100 bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl focus:bg-opacity-100 bg-opacity-10 border border-gray-50"
            autoComplete
          />
          <button
            type="submit"
            className=" mt-5 h-9 w-40 bg-gray-200 rounded-3xl"
          >
            Submit
          </button>
          <a
            href={"#"}
            className="text-white text-[14px] mt-2 hover:underline pb-10"
          >
            Lupa Password?
          </a>
        </form>
      </div>
    </div>
  );
}
