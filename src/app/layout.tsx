import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Home, Calculator, Target, User } from 'lucide-react';
import Link from "next/link"; // Importamos Link

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de Comisiones",
  description: "Simulador de comisiones y planificador de actividad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 pb-16">
          <main className="container mx-auto px-4 py-8 max-w-md">
            {children}
          </main>
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 max-w-md">
              <div className="flex justify-around items-center">
                <Link href="/" className="flex flex-col items-center p-2">
                  <Home className="w-6 h-6 text-gray-600" />
                  <span className="text-sm mt-1">Inicio</span>
                </Link>
                <Link href="/simulador" className="flex flex-col items-center p-2">
                  <Calculator className="w-6 h-6 text-gray-600" />
                  <span className="text-sm mt-1">Simulador</span>
                </Link>
                <Link href="/plan-accion" className="flex flex-col items-center p-2">
                  <Target className="w-6 h-6 text-gray-600" />
                  <span className="text-sm mt-1">Plan</span>
                </Link>
                <Link href="/perfil" className="flex flex-col items-center p-2">
                  <User className="w-6 h-6 text-gray-600" />
                  <span className="text-sm mt-1">Perfil</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}
