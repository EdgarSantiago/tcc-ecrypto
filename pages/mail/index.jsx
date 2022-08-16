import { Btn, Div, Input } from "../../styles/Elements";
import { HiMenuAlt1, HiPencil } from "react-icons/hi";
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

function Mail() {
  const emails = null

  return (
    <>
      <Bar />
      <Div className="container my-2" height="100%" widthmd="30rem">
        
        {emails ? <><SearchBar /></> : <></>}

        
        {emails ? 
          <>
            {emails.map((email) => (
              <Email
                title={email.title}
                subject={email.subject}
                date={email.date}
              />
            ))}
          </>
         : 
          <>
          <Div className="row align-items-center text-center" height="80vh">
            <Div className="col-12">
                <h1>Empty</h1>
            </Div>
          </Div>
          </>
        }
      </Div>
    </>
  );
}

export default Mail;

export function Bar() {
  return (
    <>
      <nav className="navbar blur-navbar border-bottom">
        <Div className="container" widthmd="32rem" height="40px">
          <Div className="d-flex">
            <Btn className="btn btn-outline-light mb-0 click py-1 px-2">
              <HiMenuAlt1 />
            </Btn>
            <h5 className="mb-0 mt-1 mx-2 click">
              <AiOutlineReload />
            </h5>
          </Div>

          <Div className="d-flex">
            <h5 className="mb-0 mx-1">Emails</h5>
            <h7 className="mb-0 text-pink">3365</h7>
          </Div>

          <Div className="d-flex">
            <Link href="/">
              <Btn
                fs="18px"
                className="mb-0 click btn btn-outline-light py-1 px-2"
              >
                <HiPencil />
              </Btn>
            </Link>
          </Div>
        </Div>
      </nav>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <Div className="row">
        <div className="input-group px-0">
          <Btn className="btn btn-outline-light" type="button">
            <AiOutlineSearch />
          </Btn>
          <Input type="text" className="form-control" placeholder="Search" />
        </div>
      </Div>
    </>
  );
}

export function Email({ title, subject, date }) {
  return (
    <>
      <Link href="/mail/email">
        <Div
          whileHover={{ backgroundColor: "#111111" }}
          className="row align-items-center border-bottom border-secondary click"
          height="70px"
        >
          <Div className="col-1 text-center">
            <Div className="input-group">
              <Div
                border="0px"
                bg="transparent"
                className="input-group-text px-0"
              >
                <Input className="form-check-input mt-0" type="checkbox" />
              </Div>
            </Div>
          </Div>

          <Div className="col-9 px-0">
            <h5 className="mb-0 text-pink">{title}</h5>
            <h6 className="mb-0 text-white2">{subject}</h6>
          </Div>

          <Div className="col-2 px-1 mb-3 text-end">
            <p>{date}</p>
          </Div>
        </Div>
      </Link>
    </>
  );
}