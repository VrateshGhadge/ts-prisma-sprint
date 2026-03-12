// import { prisma } from './lib/prisma.js'


// async function addANote(name: string, message: string){
//     const visitingUser = await prisma.signature.create({
//         data:{
//             name,
//             message
//         }
//     })
//     console.log(visitingUser)
// }

// await addANote('John Doei', 'Hello, this is a 3rd message from John!')

// const users = await prisma.signature.findMany();

// console.log("All Guestbook Entries:", users);


import { prisma } from './lib/prisma.js'

async function addSignature(name: string, message: string) {
  return await prisma.signature.create({
    data: { name, message }
  })
}

async function getRecentSignatures(limit: number = 5) {
  return await prisma.signature.findMany({
    take: limit,
    orderBy: { createdAt: 'desc' }
  })
}

async function searchMessages(keyword: string) {
  return await prisma.signature.findMany({
    where: {
      message: { 
        contains: keyword, 
        mode: 'insensitive' 
      }
    }
  })
}

async function updateMessage(id: number, newMessage: string) {
  return await prisma.signature.update({
    where: { id },
    data: { message: newMessage }
  })
}

async function deleteSignature(id: number) {
  return await prisma.signature.delete({
    where: { id }
  })
}

