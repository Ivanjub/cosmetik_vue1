import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL
const supabaseKey = process.env.VUE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// console.log('SUPABASE URL:', supabaseUrl)


export const getPublicImage = (path) => {
  if (!path) return '/no-image.png'

  // 🔥 si ya es URL completa, no la toques
  if (path.startsWith('http')) {
    return path
  }

    return supabase.storage
      .from('product-images')
      .getPublicUrl(path)
      .data
      .publicUrl

  }