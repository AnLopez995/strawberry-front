import Body from "./components/body";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Body />
      {children}
    </div>
  );
}
