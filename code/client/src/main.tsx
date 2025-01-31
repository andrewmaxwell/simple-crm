import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import UserPage from "./UserPage.tsx";
import Layout from "./Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="users/:id" element={<UserPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
