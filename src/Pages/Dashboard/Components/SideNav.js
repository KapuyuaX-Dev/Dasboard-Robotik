import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

let isOpen = true;
const setOpen = (e) => {
  isOpen = e;
};

export function ToggleColabsible(props) {
  return (
    <div
      className={`bg-[#282525] w-full p-2 flex gap-3 text-white ${
        isOpen ? "justify-end" : "justify-center"
      }`}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      {isOpen && <div>{props.date}</div>}
      <FontAwesomeIcon icon={faBars} size="xl" className=" cursor-pointer" />
    </div>
  );
}

export function Nav(props) {
  return (
    <Link to={props.to}>
      <div
        className={`bg-[#282525] w-full p-2 flex items-center gap-2 cursor-pointer border-y-2 border-black hover:bg-yellow-400 text-white ${
          isOpen ? "justify-start" : "justify-center flex-col"
        }`}
      >
        <FontAwesomeIcon icon={props.icon} size="l" />
        {/*isOpen && <div>{props.children}</div>*/}
        <div className={isOpen ? "" : "text-[8px]"}>{props.children}</div>
      </div>
    </Link>
  );
}

export default function SideNav({ children }) {
  return (
    <div className={`${isOpen ? "w-56" : "w-16"} h-screen bg-black`}>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
