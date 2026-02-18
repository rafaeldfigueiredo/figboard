import {writeFile} from 'fs/promises'
import path from 'path'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

async function radioMan() {
    const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })    
    await writeFile('./myfile.txt',`Hello World! Today is ${date}`)
}

// Serve static files from the 'public' directory
app.use(express.static(path.join(import.meta.dirname, 'public')));

// Define a route to serve the index.html file explicitly if needed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/create_file',async (req,res)=>{
    await radioMan()
    res.end("File Created!")
})

app.listen(8080,()=>{
    console.log(`Sucess, connected to http://127.0.0.1:8080`);
    
})