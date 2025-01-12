

"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

  const params = useParams()

  return (
    <LiveblocksProvider 
      throttle={16}                        // Define la cantidad de actualizaciones por segundo (en este caso, 16 FPS).
      authEndpoint="/api/liveblocks-auth"  // Utiliza el endpoint /api/liveblocks-auth para verificar los permisos y generar un token de acceso para el usuario.
    >
      {/* RoomProvider configura la sala específica basada en params.documentId. */}
      <RoomProvider id={params.documentId as string}>  
        <ClientSideSuspense fallback={<div>Loading…</div>}>
        {/* Una vez configurada la sala, los hijos (children) tienen acceso a las funcionalidades en tiempo real de Liveblocks. */}
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}