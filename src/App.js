import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import React from "react";
import { CookiesProvider } from 'react-cookie';

import Top from "./components/main_page/Top";
import Bottom from "./components/main_page/Bottom";
import Main from "./components/main_page/MainPage";
import Login from "./components/login_page/LoginPage";
import FindAcc from "./components/login_page/FindAcc";
import DM from "./components/dm_page/DM";
import WritePost from "./components/board_page/WritePost";
import Register from "./components/login_page/RegisterPage";
import Admit from "./components/login_page/AdmitPage";
import FindUser from "./components/main_page/FindMem";
import MyPage from "./components/my_page/MyPage";
import ProfilePage from "./components/profile_page/UserProfilePage";
import PostList from "./components/board_page/PostList";
import ImageUploadForm from "./components/profile_page/ImageUploadForm";
import PostDetail from "./components/board_page/PostDetail";
import UserBan from "./components/my_page/UserBan";
import ReportPage from "./components/report_page/ReportPage";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={
              <div>
                <Top />
                <Outlet />
                <Bottom />
              </div>
            }
          >
            <Route path="" element={<Main />} />
            <Route path="login/*" element={<Login />} />
            <Route path="register/enterInfo/*" element={<Register />} />
            <Route path="register/admitCheck/*" element={<Admit />} />
            <Route path="DM/*" element={<DM />} />
            <Route path="board/list/*" element={<PostList />} />
            <Route path="board/write/*" element={<WritePost />} />
            <Route path="board/read/*" element={<PostDetail />} />
            <Route path="findUser/*" element={<FindUser />} />
            <Route path="mypage/*" element={<MyPage />} />
            <Route path="profile/*" element={<ProfilePage />} />
          </Route>
          <Route path="login/findAcc" element={<FindAcc />} />
          <Route path="profile/uploadImage" element={<ImageUploadForm />} />
          <Route path="board/banUser/*" element={<UserBan />} />
          <Route path="board/report/*" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
