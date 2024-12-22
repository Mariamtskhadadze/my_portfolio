import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import AppRoutes from "./routes";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavigationBar />
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
