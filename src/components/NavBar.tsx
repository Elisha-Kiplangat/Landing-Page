

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Survey Site</div>
        <div>
          <a href="/" className="mx-2">Home</a>
          <a href="/about" className="mx-2">About</a>
          <a href="/contact" className="mx-2">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar