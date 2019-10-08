//简单的路由使用
import React, { Fragment, Component } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <Router>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/User">用户</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/User" component={User}></Route>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
}

//首页组件
class Home extends Component {
    render() {
        return <div>Home首页</div>;
    }
}
//用户的组件
class User extends Component {
    state = {
        list: [
            {
                id: 1,
                name: "富婆一号"
            },
            { id: 2, name: "富婆二号" },
            { id: 3, name: "富婆三号" }
        ]
    };
    render() {
        return (
            <Fragment>
                <div>
                    12314
                </div>
                {this.state.list.map(v => (
                    <div key={v.id}>{v.name} 的 详情</div>
                ))}
            </Fragment>
        );
    }
}
export default App;
