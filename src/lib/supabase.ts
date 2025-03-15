import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para nuestras tablas en Supabase
export interface Profile {
  id: string
  name: string
  role: string
  monthly_goal: number
  created_at: string
}

export interface Achievement {
  id: string
  profile_id: string
  title: string
  description: string
  created_at: string
}

export interface Goal {
  id: string
  profile_id: string
  name: string
  target: number
  current: number
  unit: string
  created_at: string
}

export interface Sale {
  id: string
  profile_id: string
  product_id: string
  amount: number
  commission: number
  created_at: string
} 