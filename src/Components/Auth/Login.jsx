import Form from "../Common/Form";
import SecureIcon from "../Common/Icons/SecuredIcon";
import UserIcon from "../Common/Icons/UserIcon";
import BrandInfo from "./BrandInfo";



class LoginForm extends Form {
  state = { data: { username: "", password: "" } };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state.data;
    const data = await (username, password);
    if (!data) return;

    localStorage.setItem("token", data.token);
    this.props.history.replace("/app");
  };

  render() {
    const { username, password } = this.state.data;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="h-screen w-screen flex bg-gradient-to-tr from-blue-800 to-purple-800">
        <BrandInfo />

        <div className="flex w-full justify-center items-center bg-white rounded p-8">
          <form className="bg-white" style={{ width: "400px" }}>
            <h1 className="text-gray-800 font-bold text-2xl mb-4 pl-4">
              Connexion
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <UserIcon />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                value={username}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <SecureIcon />
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={password}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Se connecter
            </button>
            <span
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
              onClick={() => this.props.history.push("/register")}
            >
              Pas encore inscrit ?
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
