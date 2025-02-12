// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema
  
//   model User {
//     id         Int     @id @default(autoincrement())
//     email      String  @unique
//     name       String?
//     role       Role    @default(USER)
//     dashboards Dashboard[]
//     documents  Content[]
//   }
export interface User {
    id: number;
    email: string;
    name: string | null;
    role: Role;
    dashboards: Dashboard[];
    documents: Content[];
}
  
//   model Content {
//     id        Int     @id @default(autoincrement())
//     title     String
//     content   String
//     preview   String  
//     author    User    @relation(fields: [authorId], references: [id])
//     authorId  Int
//     dashboards Dashboard[]
//   }
export interface Content {
    id: number;
    title: string;
    content: string;
    preview: string;
    author: User;
    authorId: number;
    dashboards: Dashboard[];
}

//   model Dashboard {
//     id        Int     @id @default(autoincrement())
//     title     String
//     documents Content[]
//     author    User    @relation(fields: [authorId], references: [id])
//     authorId  Int
//   }
export interface Dashboard {
    id: number;
    title: string;
    documents: Content[];
    author: User;
    authorId: number;
}

//   enum Role {
//     USER
//     ADMIN
//   }
enum Role {
    USER,
    ADMIN
}
