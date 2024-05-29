import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <>
      <div className="relative overflow-hidden flex flex-col h-screen justify-center items-center">
        <h1 className="text-5xl font-extrabold animate-in slide-in-from-top duration-1000 fade-in">
          {"<Hello World />"}
        </h1>
        <div className="absolute bottom-0 right-0 p-4 animate-in slide-in-from-right duration-1000">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default App;
