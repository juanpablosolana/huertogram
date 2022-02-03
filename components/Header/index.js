import Image from "next/image"

const Header = () => {
  return (
    <header className="shadow-sm border-b bg-white top-0 fixed w-full">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto p-2">
        <Image src="/logo.png" alt="Huertogram Logo" width={172} height={56} />
      </div>
    </header>
  )
}

export default Header