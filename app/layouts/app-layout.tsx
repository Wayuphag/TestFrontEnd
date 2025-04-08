import { NavLink, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import liff from '@line/liff';

export default function AppLayout(){
    useEffect(() => {
        const init = async () => {  
        await liff.init({ liffId: '2007221156-loRyrgz4' }); // ใส่ LIFF ID จาก LINE Developers
        if (!liff.isLoggedIn()) {
        liff.login();
        }            
      }
      init();
    },[]);
    return (
        <div>
            <div className="mx-auto container">
                <Outlet/>
            </div>
        </div>
    );
}