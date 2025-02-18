import prisma from "~/lib/prisma";
import { Dashboard } from "~/types";

export default eventHandler( async () => {
    const dashboards = await prisma.dashboard.findMany({
        include: {
            documents: true,
            author: true,
        },
    });
    return dashboards; 
});
