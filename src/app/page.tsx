import Navbar from "@/components/navbar";
import ThemeScript from "./theme-script";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <ThemeScript /> */}
      <Navbar />
      <main>
        <div>
          <h1>Debug Page</h1>
          <p>
            This is a simple page to test if the app can render without errors.
          </p>
        </div>
      </main>
    </div>
  );
}
