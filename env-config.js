const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.API_URL': prod ? 'https://api.example.com' : 'https://localhost:900012'
}