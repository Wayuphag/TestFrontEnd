import { useEffect, useState } from "react";
import liff from "@line/liff";


export default function Home() {
  const [profile, setProfile] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const getProfile = async () => {
      if(liff.isLoggedIn()) {
        const prof = await liff.getProfile();
        setProfile(prof);
      }
    };
    getProfile();
    
  }, [])
  const sendMessage = () => {
    liff.sendMessages([
      {
        type : "text",
        text: "Hello, Non"
      }
    ]).then(() => {
      liff.closeWindow();
    }).catch((e) => {
       alert("Send Message Error : "+ e.message )
    });
  };
  const Logout = () => {
    liff.logout();
  }
  return (
    <>
    <button className="bg-red-400 px-4 rounded-full" onClick={sendMessage}>Send</button>
      <h1>LINE LIFF Demo</h1>
      {profile ? (
        <div>
          <p>Name: {profile.displayName}</p>
          <img src={profile.pictureUrl} alt="profile" width={100} />
          <button className="bg-gray-400 px-4 rounded-full" onClick={Logout}>Logout</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )} 
    </>
        
  );
}
