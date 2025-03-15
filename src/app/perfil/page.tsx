'use client'

import { useState } from 'react'

interface UserProfile {
  name: string
  role: string
  monthlyGoal: number
  achievements: {
    title: string
    description: string
  }[]
  stats: {
    label: string
    value: string
  }[]
}

const initialProfile: UserProfile = {
  name: 'Martin Rodriguez',
  role: 'Asesor de Ventas',
  monthlyGoal: 800000,
  achievements: [
    {
      title: 'Meta Superada',
      description: 'Superaste tu meta mensual en Febrero 2024'
    },
    {
      title: 'Capacitación Completada',
      description: '20 horas de capacitación completadas'
    }
  ],
  stats: [
    {
      label: 'Ventas del Mes',
      value: '$6.388.800'
    },
    {
      label: 'Comisiones',
      value: '$111.570'
    },
    {
      label: 'Presentaciones',
      value: '45'
    }
  ]
}

export default function PerfilPage() {
  const [profile] = useState<UserProfile>(initialProfile)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl text-blue-600">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {profile.name}
        </h1>
        <p className="text-gray-600">{profile.role}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {profile.stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Logros
        </h2>
        <div className="space-y-4">
          {profile.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">🏆</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Objetivos
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Meta Mensual</span>
              <span className="text-sm font-semibold text-gray-900">
                ${profile.monthlyGoal.toLocaleString('es-CL')}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: '75%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 