import { NavLink, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { initLiff } from "~/liffInit";

export default function AppLayout(){
    useEffect(() => {
        initLiff
      },[]);
    return (
        <div>
            <div className="mx-auto container">
                <Outlet/>
            </div>
        </div>
    );
}