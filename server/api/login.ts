import prisma from "~/lib/prisma";

export default eventHandler( async (event) => {
    const { body: email } = await readBody(event);
    
    const user = await prisma.user.findUnique({ 
        where: {
            email: email,
        }})
    return { user: user }
});
