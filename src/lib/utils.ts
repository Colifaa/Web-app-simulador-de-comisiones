import { supabase } from './supabase'

export async function getCurrentProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return profile
}

export async function getProfileGoals(profileId: string) {
  const { data: goals } = await supabase
    .from('goals')
    .select('*')
    .eq('profile_id', profileId)
    .order('created_at', { ascending: true })

  return goals || []
}

export async function getProfileAchievements(profileId: string) {
  const { data: achievements } = await supabase
    .from('achievements')
    .select('*')
    .eq('profile_id', profileId)
    .order('created_at', { ascending: false })

  return achievements || []
}

export async function getProfileSales(profileId: string) {
  const { data: sales } = await supabase
    .from('sales')
    .select('*')
    .eq('profile_id', profileId)
    .order('created_at', { ascending: false })

  return sales || []
}

export async function updateGoal(goalId: string, current: number) {
  const { data, error } = await supabase
    .from('goals')
    .update({ current })
    .eq('id', goalId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function addSale(profileId: string, productId: string, amount: number, commission: number) {
  const { data, error } = await supabase
    .from('sales')
    .insert([
      { profile_id: profileId, product_id: productId, amount, commission }
    ])
    .select()
    .single()

  if (error) throw error
  return data
} 