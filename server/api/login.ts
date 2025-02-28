import prisma from "~/lib/prisma";

export default eventHandler( async (event) => {
    const { body: email } = await readBody(event);
    
    const user = await prisma.user.findUnique({ 
        where: {
            email: email,
        }})
    if (user) {
        if (!user.avatar) {
            user.avatar = 'files/avatars/default_avatar.png'
        }
    }
    return { user: user }
});
