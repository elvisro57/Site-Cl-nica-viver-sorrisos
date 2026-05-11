import './globals.css'

export const metadata = {
  title: 'Viver Sorrisos Odontologia e Estética',
  description: 'Clínica odontológica em Foz do Iguaçu. Implantes dentários, Prótese e Dentista.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
