import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headero from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/Cp";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/postlist-store";

function App() {
  const [selTab, setSelTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-cont">
        <Sidebar selTab={selTab} setSelTab={setSelTab}></Sidebar>
        <div className="content">
          <Headero></Headero>
          {selTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
