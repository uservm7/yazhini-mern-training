import { Loader } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-teal-600">
        <div className="h-4/6 w-[30%] flex justify-center items-center bg-black rounded-md shadow-2xl">
          <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
            <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[white] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black-500" />
            <input type="text" name="" id="" placeholder="email" className="p-3 bg-[white] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black-500" />
            <input type="number" name="" id="" placeholder="phone" className="p-3 bg-[white] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black-500" />
            <input type="password" name="" id="" placeholder="password" className="p-3 bg-[white] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-black-500" />
            <button type="submit" className="w-full bg-teal-600 text-white p-3"> <Loader  className="animate-spin"/>  Register</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default App;