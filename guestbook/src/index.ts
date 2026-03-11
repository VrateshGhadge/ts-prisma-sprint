import { prisma } from './lib/prisma.js'


async function addANote(name: string, message: string){
    const visitingUser = await prisma.signature.create({
        data:{
            name,
            message
        }
    })
    console.log(visitingUser)
}

await addANote('John Doei', 'Hello, this is a 3rd message from John!')

const users = await prisma.signature.findMany();

console.log("All Guestbook Entries:", users);
