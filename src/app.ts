import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//Application routes

app.use('/api/v1/user', userRoute)

//testing route
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully!')
})

export default app
