import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Lists from "./Lists";
import NewPost from "./../../modules/posts/posts_insert_newPost";
import DetailsPost from "./detailsPost";

export default function Posts() {
    return (
        <div>
            <Switch>
                <Route exact path="/posts">
                    <Main />
                </Route>

                <Route path="/posts/list">
                    <Lists />
                </Route>

                <Route path="/posts/newPost">
                    <NewPost />
                </Route>

                <Route path="/posts/detailPost">
                    <DetailsPost />
                </Route>
            </Switch>
        </div>
    );
}
