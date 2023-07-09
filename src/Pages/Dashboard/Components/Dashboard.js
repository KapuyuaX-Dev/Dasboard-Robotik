import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { Link, useNavigate } from "react-router-dom";
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

import Swal from "sweetalert2";
import SideNav, { Nav, ToggleColabsible } from "./SideNav";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function Card(props) {
  return (
    <Link to={props.uri}>
      <div className="card bg-yellow-400 w-80 h-32 rounded-md cursor-pointer">
        <div className="p-3 h-24">{props.name}</div>
        <div className="flex justify-end items-center bg-yellow-300 h-8 p-3">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
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
    <>
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

        <div className="container bg-slate-300">
          <div className="card-wrapper m-5 flex flex-wrap items-center justify-center gap-10">
            <Card name="Kelola User" uri="/admin/dashboard/users" />
            <Card name="Kelola Website" uri="/admin/dashboard/websetting" />
            <Card name="Kelola Berita" uri="/admin/dashboard/news" />
            <Card name="Kelola Gallery" uri="/admin/dashboard/gallery" />
            <Card name="Kelola Publikasi" uri="/admin/dashboard/publication" />
            <Card name="Kelola Sponsor" uri="/admin/dashboard/sponsors" />
          </div>
        </div>
      </div>
    </>
  );
}
