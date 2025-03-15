'use client'

import { useState } from 'react'

interface Product {
  id: string
  name: string
  commission: number
  minAmount: number
}

const products: Product[] = [
  { id: 'A', name: 'Producto A', commission: 0.10, minAmount: 700000 },
  { id: 'B', name: 'Producto B', commission: 0.15, minAmount: 900000 },
  { id: 'C', name: 'Producto C', commission: 0.20, minAmount: 1100000 },
  { id: 'D', name: 'Producto D', commission: 0.35, minAmount: 1300000 },
  { id: 'E', name: 'Producto E', commission: 0.40, minAmount: 1500000 },
]

export default function SimuladorPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [amount, setAmount] = useState<string>('')

  const calculateCommission = (amount: number, commission: number) => {
    return amount * commission
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setAmount(value)
  }

  const commission = amount ? calculateCommission(Number(amount), selectedProduct.commission) : 0

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Simulador de Comisiones
        </h1>
        <p className="mt-2 text-gray-600">
          Selecciona un producto y simula tus ganancias
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Selecciona el Producto</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={selectedProduct.id}
              onChange={(e) => setSelectedProduct(products.find(p => p.id === e.target.value) || products[0])}
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - {(product.commission * 100)}%
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Monto de Venta</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={amount ? `$${Number(amount).toLocaleString('es-CL')}` : ''}
              onChange={handleAmountChange}
              placeholder="Ingresa el monto"
            />
          </label>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">Tu comisión será de</p>
            <p className="text-3xl font-bold text-green-600">
              ${commission.toLocaleString('es-CL')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900">Información del Producto</h3>
        <p className="mt-2 text-sm text-blue-600">
          Monto mínimo requerido: ${selectedProduct.minAmount.toLocaleString('es-CL')}
        </p>
        <p className="text-sm text-blue-600">
          Comisión: {(selectedProduct.commission * 100)}%
        </p>
      </div>
    </div>
  )
} 