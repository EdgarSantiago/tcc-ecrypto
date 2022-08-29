import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

export function useEthereum() {
  const router = useRouter();

  const [ethereum, setEthereum] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  const logar = (page) => {
    if (typeof ethereum === "undefined") {
      // TODO: fazer um alerta mais bonito. modal, swal fire (?)
      return alert("Você precisa instalar a MetaMask para poder fazer login.");
    }

    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      setAccount(accounts[0]);
      if (page) router.push(page);
    });
  };

  const enviar = (to, subject, body, value) => {
    if (typeof ethereum === "undefined" || typeof account === "undefined") {
      // TODO: fazer um alerta mais bonito. modal, swal fire (?)
      return alert("Você precisa estar logado para poder enviar um e-mail.");
    }

    const emailObj = {
      type: "mail",
      subject: subject || "Sem assunto",
      body: body || "Sem corpo",
    };

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            to,
            from: account,
            value: !value
              ? "0x00"
              : Web3.utils.toHex(Web3.utils.toWei(value, "ether")),
            gas: "0xb3b0",
            data: Web3.utils.toHex(JSON.stringify(emailObj)).split("0x")[1],
          },
        ],
      })
      .then((tx) => {
        // TODO: fazer um alerta mais bonito. modal, swal fire (?)
        alert("E-mail enviado com sucesso.\nTX: " + tx);
        router.replace("/mail");
      });
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setEthereum(window.ethereum);
    }
  }, []);

  return { ethereum, account, logar, enviar };
}