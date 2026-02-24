import {writeFile} from 'fs/promises'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('/create_file',async (req,res)=>{
    const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo",});
    await writeFile("./myfile.txt", `Hello World! Today is ${date}`);
    res.end("File Created!")
})

app.listen(8080,()=>{
    console.log(`Sucess, connected to http://127.0.0.1:8080`);
    
})