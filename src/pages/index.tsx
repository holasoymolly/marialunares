export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-transparent">
      {/* Video de fondo */}
      <video
        src="/videos/freepik__closeup-shot-a-person-with-curly-hair-and-unique-s__75283.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover -z-20" // Añadimos -z-10 para que el video quede al fondo
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Contenido dinámico */}
      <main className="relative z-10 flex justify-center items-center min-h-screen">
        {/* Aquí puedes añadir contenido específico del index si lo necesitas */}
      </main>
    </div>
  );
}