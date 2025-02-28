import { writeFile } from "fs/promises"
import  { v4 } from "uuid"


export default defineEventHandler(async (event) => {
    const formData:any = await readMultipartFormData(event)

    const file = formData.find( (item:any) => item.name === 'avatar')
    const originalFileName = file.filename

    const path = 'files/avatars/' + v4() + '.' + originalFileName.split('.').pop()
    await writeFile('public/' + path, file.data)
    return { path }
})
