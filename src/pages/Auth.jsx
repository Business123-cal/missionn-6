import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // FORM state
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "Wanita",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // USER DATA (array of object)
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const userFound = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (userFound) {
        navigate("/home");
      } else {
        alert("Email atau password salah");
      }
    } else {
      if (form.password !== form.confirmPassword) {
        alert("Password tidak sama");
        return;
      }

      const emailUsed = users.some((u) => u.email === form.email);
      if (emailUsed) {
        alert("Email sudah terdaftar");
        return;
      }

      setUsers([
        ...users,
        {
          id: Date.now(),
          name: form.name,
          email: form.email,
          gender: form.gender,
          phone: form.phone,
          password: form.password,
        },
      ]);

      alert("Registrasi berhasil, silakan login");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9EE] px-3">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-8">

        {/* TITLE */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Masuk ke Akun" : "Pendaftaran Akun"}
        </h3>
        <p className="text-sm text-center text-gray-500 mt-1">
          {isLogin
            ? "Yuk, lanjutin belajarmu di videobelajar."
            : "Yuk, daftarkan akunmu sekarang juga!"}
        </p>

        <form onSubmit={handleSubmit} className="mt-6">

          {/* ===== REGISTER ONLY ===== */}
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-sm mb-2">Nama Lengkap *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">E-Mail *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">Jenis Kelamin *</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option>Wanita</option>
                  <option>Pria</option>
                </select>
              </div>

              {/* NO HP (sesuai mockup) */}
              <div className="mb-4">
                <label className="block text-sm mb-2">No. HP *</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-3 border rounded-lg bg-gray-50">
                    <img src="./bendera.png" alt="ID" className="w-5 h-5" />
                    <span className="text-sm">+62</span>
                  </div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder=""
                    className="flex-1 px-4 py-3 border rounded-lg"
                  />
                </div>
              </div>
            </>
          )}

          {/* ===== LOGIN EMAIL ===== */}
          {isLogin && (
            <div className="mb-4">
              <label className="block text-sm mb-2">E-Mail *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
          )}

          {/* PASSWORD */}
          <div className="mb-2">
            <label className="block text-sm mb-2">Kata Sandi *</label>
            <div className="relative">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* LUPA PASSWORD (LOGIN ONLY) */}
          {isLogin && (
            <div className="flex justify-end mb-4">
              <button
                type="button"
                className="text-sm text-green-600 hover:underline"
              >
                Lupa Password?
              </button>
            </div>
          )}

          {/* CONFIRM PASSWORD */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm mb-2">
                Konfirmasi Kata Sandi *
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute top-3 right-3 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          )}

          {/* MAIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
          >
            {isLogin ? "Masuk" : "Daftar"}
          </button>

          {/* SECONDARY BUTTON */}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full mt-3 bg-green-100 text-green-600 py-3 rounded-lg font-semibold"
          >
            {isLogin ? "Daftar" : "Masuk"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-3 text-gray-400 text-sm">atau</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2
            border border-gray-200 py-3 rounded-lg hover:bg-gray-50"
          >
            <img src="./gugel.png" alt="google" className="w-5" />
            <span className="text-gray-700 font-medium">
              {isLogin ? "Masuk dengan Google" : "Daftar dengan Google"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

