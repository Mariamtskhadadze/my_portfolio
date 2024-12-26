import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import AppRoutes from "./routes";
import "./i18n"; // Import the i18n setup file

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* Navigation Bar with language toggle and dark mode */}
        <NavigationBar />
        {/* Main Routes */}
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
