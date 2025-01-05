import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import CreateAccountNavbar from "components/Navbars/CreateAccountNavbar";
import VerifyAccountNavBar from "components/Navbars/VerifyAccountNavbar";
// views
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import CreateWallet from "views/auth/Createpin.js";
import ConfirmPin from "views/auth/Confirmpin.js";
import SecureWallet from "views/auth/Securewallet.js";
import CreatePin from "views/auth/Createpin.js";


export default function Auth() {
  return (
    <>
      <Switch>
        <Route path="/auth/register" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <CreateAccountNavbar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <Register />
            </section>
          </main>
        </Route>

        <Route path="/auth/login" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <CreateAccountNavbar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <Login />
            </section>
          </main>
        </Route>
        
        <Route path="/auth/createpin" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <VerifyAccountNavBar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <CreatePin />
            </section>
          </main>
        </Route>

        <Route path="/auth/confirmpin" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <VerifyAccountNavBar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <ConfirmPin />
            </section>
          </main>
        </Route>

        <Route path="/auth/createwallet" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <VerifyAccountNavBar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <CreateWallet />
            </section>
          </main>
        </Route>

        <Route path="/auth/securewallet" exact>
          <main className="flex">
            <div className="w-160 max-w-base">
              <VerifyAccountNavBar />
            </div>
            <section className="relative w-full h-full min-h-screen flex-grow bg-primary-color">
              <SecureWallet />
            </section>
          </main>
        </Route>

      </Switch>
    </>
  );
}
