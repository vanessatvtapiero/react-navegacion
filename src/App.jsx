import Navbar from "./Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-['Mozilla_Headline', sans-serif] animate-slide-module mb-4">
                    Bienvenidos a mi app
                </h1>
                <p className="text-gray-500">Esta parte se encuentra en el contenido principal</p>
            </div>
        </>
    );

}

export default App;