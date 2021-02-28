import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <div>
          <h2 className="text-white cursor-pointer" onClick={() => router.push("/build")}>justPC</h2>
          {/* <img className="h-8" src="/img/logo-inverted.svg" alt="Workcation"> */}
        </div>
        <div>
          <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </header>
    )
}
