import { useEffect, useRef } from "react";
import { CredentialResponse } from "../interfaces/google";

export const GoogleButton = ({login}: {login: any}): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.google || !divRef.current) {
      return;
    }

    try {
      window.google.accounts.id.initialize({
        ux_mode: "popup",
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: async (res: CredentialResponse) => {
          if (res.credential) {
            login(res);
          }
        },
      });
      window.google.accounts.id.renderButton(divRef.current, {
        theme: "filled_blue",
        size: "medium",
        type: "standard",
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div ref={divRef} />;
};
