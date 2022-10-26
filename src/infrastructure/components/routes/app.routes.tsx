import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../../features/home/page/home.page";
import TodoPage from "../../../features/todo/page/todo.page";

export function AppRoutes() {
  return (
    <Routes>
      {/* para definir rutas, se utiliza route */}
      <Route path="home" element={<HomePage></HomePage>}></Route>
      <Route path="" element={<HomePage></HomePage>}></Route>
      <Route path="todo" element={<TodoPage></TodoPage>}></Route>
      {/* para todo lo demas que no exista: si el usuario pone /robot, le lleva a la ruta vacia, que le lleva a la home*/}
      <Route path="*" element={<Navigate replace to={""}></Navigate>}></Route>
    </Routes>
  );
}
