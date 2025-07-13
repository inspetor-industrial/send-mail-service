export function getOrigin() {
  if (process.env.NODE_ENV === 'production') {
    return /https:\/\/.*\.vercel\.app/
  }

  return /localhost:5173/g
}
