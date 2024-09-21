const Navbar = ({ a }) => {

    console.log(a)
    return (
        <div className="w-full h-[3vh] bg-#A8D5E3 text-white flex justify-start items-start gap-4">
            {a}
        </div>
    )
}

export default Navbar;