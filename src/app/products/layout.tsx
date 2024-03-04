export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <nav>
          <ul>
            <li>
              <a href="/products/fresas">Fresas</a>
            </li>
            <li>
              <a href="/products/letreros">Letreros</a>
            </li>
          </ul>
        </nav>
        {children}
      </main>
    </div>
  );
}
