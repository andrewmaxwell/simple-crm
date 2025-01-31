import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import UserPage from "./UserPage.tsx";
import Layout from "./Layout.tsx";
import { Users } from "./users.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Users />} />
                    <Route path="users/:id" element={<UserPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
