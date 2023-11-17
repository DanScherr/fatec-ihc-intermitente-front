/* eslint-disable no-unused-vars */
//@ts-check
import React, { lazy, Suspense } from "react";
import {
    Routes,
    Route
} from "react-router-dom";
/** Components */
import LoadingPage from "./pages/Shared/Loading/LoadingPage";
import Auth from "./pages/Auth";

/** Pages */
const SharedLayout = lazy(() => import("./pages/Shared/Layout/index"));
const Home = lazy(() => import("./pages/Home/index"));
const Notificacao = lazy(() => import("./pages/Notificacao/index"));
const Configuracao = lazy(() => import("./pages/Configuracao/index"));

export default function Router(  ) {
    return (
        <Auth>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route element={<SharedLayout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/notificacao" element={<Notificacao />} />
                        <Route path="/configuracao" element={<Configuracao />} />
                    </Route>
                </Routes>
            </Suspense>
        </Auth>
    );
};