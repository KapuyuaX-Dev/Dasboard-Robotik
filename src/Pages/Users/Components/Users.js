import { useEffect, useState } from "react";
import TopNav from "../../Dashboard/Components/TopNav";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUpRightFromSquare,
  faBars,
  faBook,
  faEarthAmericas,
  faHouse,
  faImage,
  faNewspaper,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav, {
  Nav,
  ToggleColabsible,
} from "../../Dashboard/Components/SideNav";

export default function UsersComponent() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUser(user);
    } else {
      navigate("/admin");
    }
  }, []);

  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Jakarta",
          hour12: false,
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <TopNav username={user} />
      <div className="flex flex-row">
        <SideNav>
          <ToggleColabsible date={date} />
          <Nav to="/admin/dashboard" icon={faHouse}>
            Home
          </Nav>
          <Nav to="/admin/dashboard/users" icon={faUser}>
            Users
          </Nav>
          <Nav to="/admin/dashboard/websetting" icon={faEarthAmericas}>
            Website
          </Nav>
          <Nav to="/admin/dashboard/news" icon={faNewspaper}>
            News
          </Nav>
          <Nav to="/admin/dashboard/gallery" icon={faImage}>
            Gallery
          </Nav>
          <Nav to="/admin/dashboard/websetting" icon={faBook}>
            Publication
          </Nav>
          <Nav to="/admin/dashboard/websetting" icon={faStar}>
            Sponsorship
          </Nav>
        </SideNav>

        <div className="container bg-slate-300"> users</div>
      </div>
    </div>
  );
}
