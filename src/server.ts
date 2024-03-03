import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    // database connect
    await mongoose.connect(config.database_url as string)
    console.log('Database connected successfully!')

    // server start
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect')
  }
}
bootstrap()
