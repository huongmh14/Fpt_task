const  express =require ('express')

const app = express()


const hostname ='localhost'
const port = 8017
app.get('/', (req, res) => {
  res.send('<h1> vector ne </h1>')
})

app.listen(port,hostname,()=>{
    console.log(`vector ahihi at http://${hostname}:${port}/`)
})