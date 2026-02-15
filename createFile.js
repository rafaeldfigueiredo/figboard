import {writeFile} from 'fs/promises'

const radioButton = document.querySelector('#radioManButton')

async function radioMan() {
    await writeFile('./myfile.txt',`Hello World! Today is ${new Date()}`)    
}

try {
    radioButton.addEventListener('click',radioMan())
} catch (error) {
    console.log(error);
    
}