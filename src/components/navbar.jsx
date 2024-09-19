import { UserIcon } from "lucide-react";

export function Navbar({ token, onLogout }) {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TODOAPP con Login</h1>
        {token ? <div className="flex items-center space-x-4">
          <span>Bienvenido</span>
          <button onClick={onLogout} className="flex items-center space-x-2">
            <UserIcon className="w-6 h-6" />
            <span>Salir</span>
          </button>
        </div> : <></>
        }
      </div>
    </nav>
  );
}
