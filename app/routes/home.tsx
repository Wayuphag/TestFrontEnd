import { useEffect, useState } from "react";
import liff from "@line/liff";


export default function Home() {
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {
    const getProfile = async () => {
      if(liff.isLoggedIn()) {
        const prof = await liff.getProfile();
        setProfile(prof);
      }else{
        liff.login()
      }
    };
    getProfile();
  }, [])

  return (
    <>
    <h1>LINE LIFF Demo</h1>
      {profile ? (
        <div>
          <p>Name: {profile.displayName}</p>
          <img src={profile.pictureUrl} alt="profile" width={100} />
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </>
        
  );
}
