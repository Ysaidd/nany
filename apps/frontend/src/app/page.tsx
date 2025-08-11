// apps/frontend/src/app/page.tsx
async function getBackendMessage() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error('Falló la conexión al backend');
    return res.json();
  } catch (error) {
    console.error(error);
    return { message: 'Error al conectar con el servidor 😢' };
  }
}

export default async function Home() {
  const { message } = await getBackendMessage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-10 bg-gray-800 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-4">✨ Tienda de Pulseras ✨</h1>
        <p className="text-xl text-cyan-300">Respuesta del Servidor:</p>
        <p className="text-2xl font-mono mt-2 p-4 bg-black rounded-md">{message}</p>
      </div>
    </main>
  );
}