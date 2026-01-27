
const file = event.target.files[0]

const { data } = await supabase.storage
  .from('productos')
  .upload(`/${Date.now()}_${file.name}`, file)

const imageUrl = `https://wplvjpaobfbwgbyxhkwb.supabase.co/storage/v1/object/public/productos/${data.path}`

await supabase.from('productos').insert({
  nombre: 'Crema facial',
  descripcion: 'Hidratante',
  precio: 12990,
  imagen: imageUrl
})