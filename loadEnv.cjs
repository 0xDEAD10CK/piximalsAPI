const dotenv = require('dotenv')
const path = require('path')

const loadEnv = () => {
    const env = process.env.NODE_ENV || 'development' // Set default to development if not specified
    const envFilePath = path.resolve(__dirname, `.env.${env}`)
    dotenv.config({ path: envFilePath })
    console.log(`Loaded environment variables from ${envFilePath}`)
}

module.exports = {
    loadEnv: loadEnv,
}
