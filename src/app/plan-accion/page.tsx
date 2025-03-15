'use client'

import { useState } from 'react'

interface Goal {
  id: string
  name: string
  target: number
  current: number
  unit: string
}

const initialGoals: Goal[] = [
  {
    id: '1',
    name: 'Presentaciones Mensuales',
    target: 45,
    current: 0,
    unit: 'presentaciones'
  },
  {
    id: '2',
    name: 'Presentaciones Semanales',
    target: 22,
    current: 0,
    unit: 'presentaciones'
  },
  {
    id: '3',
    name: 'Capacitaciones',
    target: 6,
    current: 0,
    unit: 'horas'
  }
]

export default function PlanAccionPage() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals)

  const updateGoal = (id: string, increment: boolean) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        return {
          ...goal,
          current: increment 
            ? Math.min(goal.current + 1, goal.target)
            : Math.max(goal.current - 1, 0)
        }
      }
      return goal
    }))
  }

  const calculateProgress = (current: number, target: number) => {
    return Math.round((current / target) * 100)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Plan de Acción
        </h1>
        <p className="mt-2 text-gray-600">
          Seguimiento de tus objetivos mensuales
        </p>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">{goal.name}</h3>
              <span className="text-sm text-gray-600">
                {calculateProgress(goal.current, goal.target)}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${calculateProgress(goal.current, goal.target)}%` }}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {goal.current} de {goal.target} {goal.unit}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => updateGoal(goal.id, false)}
                  className="px-2 py-1 text-sm rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                  disabled={goal.current === 0}
                >
                  -
                </button>
                <button
                  onClick={() => updateGoal(goal.id, true)}
                  className="px-2 py-1 text-sm rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
                  disabled={goal.current === goal.target}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <h3 className="font-semibold text-green-900">Consejos para el éxito</h3>
        <ul className="mt-2 space-y-2 text-sm text-green-600">
          <li>• Mantén un registro diario de tus presentaciones</li>
          <li>• Participa en todas las capacitaciones disponibles</li>
          <li>• Establece metas semanales alcanzables</li>
        </ul>
      </div>
    </div>
  )
} 