import { Div, Btn, Color } from "../../styles/Elements";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import { strSmartTrim } from "../../utils/string";

import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineClose, AiOutlineRollback } from "react-icons/ai";
import { HiMenuAlt1, HiPencil } from "react-icons/hi";
import { useEffect, useLayoutEffect, useState } from "react";
import { useEthereum } from "../../hooks/useEthereum";
import Image from "next/image";

const Email = () => {
  const { ethereum, account, logar } = useEthereum();
  const [email, setEmail] = useState({});

  const router = useRouter();
  const { tx } = router.query;

  useEffect(() => {
    if (typeof account !== "undefined") {
      const provider = new ethers.providers.EtherscanProvider(
        "goerli",
        "X56U4HDNT7SI7GS39BI2Q8RXDM6BR3JG2C"
      );
      provider
        .getTransaction(tx)
        .then((tx) => {
          const dataObj = JSON.parse(Web3.utils.toUtf8(tx.data));
          if (
            dataObj.type == "mail" &&
            tx.to.toLowerCase() == account.toLowerCase()
          ) {
            dataObj.tx = tx.hash;
            dataObj.date = new Date(tx.timestamp * 1000);
          }
          console.log(dataObj);
          console.log(dataObj.attachments);
          setEmail(dataObj);
        })
        .catch(console.error);
    }
  }, [account]);

  useLayoutEffect(() => {
    if (typeof ethereum !== "undefined" && typeof account === "undefined") {
      logar("/mail/" + tx);
    }
  }, [ethereum, account]);

  if (typeof ethereum === "undefined") {
    return (
      <Layout title={"Carregando... "}>
        <p style={{ textAlign: "center" }}>TODO: Loader</p>
      </Layout>
    );
  }

  return (
    <>
      <Bar id={tx} />
      <Layout title="email">
        <Div
          height="100%"
          widthmd="30rem"
          className="container px-3 px-md-0"
          style={{ marginTop: "60px" }}
        >
          <Div
            className="row rounded py-2"
            border="1px solid #fafafa30"
            whileHover={{
              backgroundColor: "#131313",
              border: "1px solid #5d5fec",
            }}
            whileTap={{
              backgroundColor: "#131313",
              border: "1px solid #5d5fec",
            }}
          >
            <p className="mb-0">
              <Color>Assunto:</Color> {email.subject}
            </p>
            <p className="mb-0">
              <Color>De:</Color> {strSmartTrim(email.tx, 10)}
            </p>
            <p className="mb-0">
              <Color>Corpo:</Color> {email.body}
            </p>
            {email.attachments ? (
              <>
                <p className="mb-0">
                  <Color>Anexos:</Color>
                  {email.attachments.map((attachs) => (
                    <Image height="50px" width="50px" src={"https://ipfs.io/ipfs/" + attachs}/>
                  ))}
                </p>
              </>
            ) : (
              <></>
            )}
          </Div>
          <Div className="row justify-content-start align-items-center">
            <Btn className="btn mt-1">Responder</Btn>
            <Link href={`https://goerli.etherscan.io/tx/${tx}`}>
              <Btn className="btn mt-1">Abrir na EtherScan</Btn>
            </Link>
            <Link href={`/mail`}>
              <Btn className="btn mt-1">Voltar</Btn>
            </Link>
          </Div>
        </Div>
      </Layout>
    </>
  );
};

export default Email;

export function Bar({ id }) {
  return (
    <>
      <nav className="navbar blur-navbar fixed-top">
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container"
          widthmd="32rem"
          height="40px"
        >
          <Div className="d-flex">
            <Btn className="btn btn-outline-light mb-0 click py-1 px-2">
              <HiMenuAlt1 />
            </Btn>
          </Div>

          <Div className="d-flex">
            <h5 className="mb-0 mx-1">Email {strSmartTrim(id, 10)} </h5>
          </Div>

          <Div className="d-flex">
            <Link href="/mail">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <AiOutlineRollback />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}