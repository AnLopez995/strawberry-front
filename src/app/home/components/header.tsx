export default function Header() {
  return (
    <header className="text-white p-4">
      <div>
        <nav>
          <ul className="flex justify-around">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Products</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}