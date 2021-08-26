import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                  <div>
                      <Route exact path="/"><Home></Home></Route>
                  </div>  
                ) :
                (
                    <div>
                        <Route exact path="/"><Auth></Auth></Route>
                    </div>  
                  )
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;