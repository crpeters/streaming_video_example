import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () =>{
    return (
        <div class="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit" component={StreamEdit}></Route>
                    <Route path="/streams/delete" component={StreamDelete}></Route>
                    <Route path="/streams/show" component={StreamShow}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;