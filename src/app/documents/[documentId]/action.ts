

"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"

export async function getUsers() {
  const { sessionClaims } = await auth()

  const clerk = await clerkClient()
 
  const response = await clerk.users.getUserList({       // Obtenemos la lista de usuarios de la organización
    organizationId: [sessionClaims?.org_id as string],
  });

  const users = response.data.map((user) => ({           // Convierte la lista de usuarios en una lista de objetos con el id y el nombre del usuario
    id: user.id,
    name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl
  }));

  return users;
}