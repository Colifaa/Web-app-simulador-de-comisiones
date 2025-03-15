export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Simulador de Comisiones
        </h1>
        <p className="mt-2 text-gray-600">
          Calcula tus ganancias y planifica tu éxito
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Resumen del Mes
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600">Meta Mensual</p>
            <p className="text-xl font-bold text-blue-900">$800.000</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600">Comisiones</p>
            <p className="text-xl font-bold text-green-900">$111.570</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a
          href="/simulador"
          className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold text-gray-900">Simulador</h3>
          <p className="text-sm text-gray-600">Calcula tus ganancias</p>
        </a>

        <a
          href="/plan-accion"
          className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold text-gray-900">Plan de Acción</h3>
          <p className="text-sm text-gray-600">Planifica tu mes</p>
        </a>
      </div>
    </div>
  )
}