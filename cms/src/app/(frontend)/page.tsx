import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="cms-home">
      <header className="cms-home__header">
        <a className="brand" href="https://www.dtechl.com" rel="noreferrer">
          <span>D</span>
          <strong>DTechLab</strong>
        </a>
        <span className="status">
          <i /> CMS conectado
        </span>
      </header>

      <main className="cms-home__main">
        <p className="eyebrow">Payload CMS · Laboratorio de contenido</p>
        <h1>{user ? `Hola, ${user.name || user.email}.` : 'Tu sitio, ahora editable.'}</h1>
        <p className="intro">
          Administra proyectos, portadas, videos y textos de DTechLab desde un solo lugar. El sitio
          público conserva su velocidad y se actualiza únicamente al publicar.
        </p>
        <div className="actions">
          <a className="primary" href={payloadConfig.routes.admin}>
            {user ? 'Abrir panel' : 'Ingresar al panel'} <span aria-hidden="true">↗</span>
          </a>
          <a className="secondary" href="https://www.dtechl.com">
            Ver sitio público
          </a>
        </div>

        <div className="cms-home__grid">
          <article>
            <span>01</span>
            <h2>Proyectos</h2>
            <p>Orden, contenido, enlaces y estado de publicación.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Recursos</h2>
            <p>Portadas responsive y videos almacenados en Supabase.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Configuración</h2>
            <p>Portada, contacto y datos generales de DTechLab.</p>
          </article>
        </div>
      </main>

      <footer>Área privada de DTechLab · Payload CMS</footer>
    </div>
  )
}
