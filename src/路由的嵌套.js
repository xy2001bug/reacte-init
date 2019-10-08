import React, { Fragment, Component } from 'react';

import { HashRouter as Router, Link, Route } from "react-router-dom";
//路由的嵌套和路由参数的传递

// 1 首页组件
class Home extends Component {
  render() {
    return (
      <Fragment>首页的内容</Fragment>
    );
  }
}
// 2 用户组件
class User extends Component {
  state = {
    list: [
      { id: 0, name: "小明" },
      { id: 1, name: "小红" },
      { id: 2, name: "富婆" }
    ],
    pathname: ""
  }

  handleJump = (id) => {
    // 1 写死的路径 不好修改不好维护  不要用   location.pathname 来获取 match.url 
    // let url = "/User/" + id+"/info";
    // let url=this.props.location.pathname+"/"+id+"/info";
    let pathname = this.props.match.url;
    console.log(this.props);
    this.setState({ pathname });
    let url = `${pathname}/${id}/info`;
    this.props.history.push(url);
  }
  render() {
    return (
      <Fragment>
        {this.state.list.map(v => <div onClick={this.handleJump.bind(this, v.id)} key={v.id}>{v.name} 的 详情</div>)}
        <hr />
        {/* 匹配用户详情的  写死的路径 不好维护 */}
        {/* <Route path='/User/:id/info' component={UserDetail} ></Route> */}
        <Route path={`${this.state.pathname}/:id/info`} component={UserDetail} ></Route>
      </Fragment>
    );
  }
}
// 3 关于组件
class About extends Component {
  render() {
    return (
      <Fragment>关于的内容</Fragment>
    );
  }
}

// 4 用户详情组件
class UserDetail extends Component {
  render() {

    const { id } = this.props.match.params;
    return (
      <Fragment>
        <div>{id}用户的头像</div>
        <div>{id}用户的个人信息</div>
        <div>{id}用户的修改密码</div>
      </Fragment>
    );
  }
}


function App() {
  return (
    <div className="AppRouter">
      <Router>
        <div className="nav">
          <Link to="/">首页</Link>
          <Link to="/User">用户</Link>
          <Link to="/About">关于</Link>
        </div>
        <div className="content">
          <Route path="/" exact component={Home} ></Route>
          <Route path="/User" component={User}></Route>
          <Route path="/About" component={About}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
