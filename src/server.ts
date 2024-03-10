import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    // database connect
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully!')

    // server start
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect')
  }
}
bootstrap()
