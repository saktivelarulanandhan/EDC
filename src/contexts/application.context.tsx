import React, { createContext, useContext, useMemo } from "react";
import { IUser } from "../models/User";
export interface IAppContext {
  isLoggedIn: boolean;
  user?: IUser;
}
const AppContext = React.createContext<IAppContext>({
  isLoggedIn: false,
  user: {} as IUser,
});
export const AppProvider = ({ children }: any) => {
  return <AppContext.Provider value={{ isLoggedIn: false }}>{children}</AppContext.Provider>;
};
export default AppContext;
