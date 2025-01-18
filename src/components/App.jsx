import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryForm from "./libraryForm"; // Path to your LibraryForm component
import NextPage from "./nextPage"; // Assuming you have a NextPage component

// App Component with Routing
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LibraryForm />} /> {/* Your form page */}
          <Route path="/nextPage" element={<NextPage />} /> {/* Page after form submission */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
