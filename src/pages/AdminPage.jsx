import { useState } from 'react';
import {  Routes, Route } from "react-router-dom";
import AdminSidebar from '../components/AdminPanel/AdminSidebar.jsx';
import AddProject from '../components/AdminPanel/AddProject.jsx';
import AddClient from '../components/AdminPanel/AddClient.jsx';
import ViewContacts from '../components/AdminPanel/ViewContacts.jsx';
import ViewSubscribers from '../components/AdminPanel/ViewSubscribers.jsx';

function AdminPage() {


    return (
        <>
            <div style={{ display: "flex" }}>
                <AdminSidebar />
                <div style={{ marginLeft: "260px", padding: "20px", width: "100%" }}>
                    <Routes>

                        <Route path="" element={<h2>Welcome to Admin Dashboard</h2>} />
                        <Route path="add-project" element={<AddProject />} />
                        <Route path="add-client" element={<AddClient />} />
                        <Route path="contacts" element={<ViewContacts />} />
                        <Route path="subscribers" element={<ViewSubscribers />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AdminPage;
