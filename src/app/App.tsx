import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage, ListPage} from "../pages";

function App(){

  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/picasso"} element={<HomePage/>}/>
              <Route path={"/picasso/post/:postId"} element={<ListPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
