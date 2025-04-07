import liff from '@line/liff';

export const initLiff = async () => {
    try {
      await liff.init({ liffId: '2007221156-loRyrgz4' }); // ใส่ LIFF ID จาก LINE Developers
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    } catch (err) {
      console.error('LIFF init error', err);
    }
  };
  