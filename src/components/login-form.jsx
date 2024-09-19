import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/services/auth";

export function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const response = await login(email, password);

    if (response.ok) {
      const data = await response.json();
      onLoginSuccess(data.token);
    } else {
      setError(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full ${error ? "border-red-500" : ""}`}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full ${error ? "border-red-500" : ""}`}
          />
        </div>
        {error && <p className="text-red-500">Invalid login credentials</p>}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Usuarios de prueba</h3>
        <p className="text-gray-700 mb-2">
          Utiliza cualquiera de los siguientes correos. Cualquier contraseña es válida:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">eve.holt@reqres.in</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">charles.morris@reqres.in</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">janet.weaver@reqres.in</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">emma.wong@reqres.in</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
