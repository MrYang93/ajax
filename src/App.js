import React from 'react';

import {Link} from 'react-router'
import axios from 'axios';
import $ from 'jquery';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: []
    }
  }

  componentDidMount(){

    //1.axios                                             显示几条   显示第几页
    axios.get('https://cnodejs.org/api/v1/topics') // ?limit=5&&page=2
     .then( res=> this.setState({data: res.data.data}) )

    // 2.fetch
    // fetch('https://cnodejs.org/api/v1/topics')
    //   .then( res => res.json() )
    //   .then( json => this.setState({data: json.data}) )

    //3. 原生
    // let _this = this
    //
    // var ajax = new XMLHttpRequest();
    //
    // ajax.onreadystatechange=function(){
    //   console.log(ajax.readyState);
    //   if(ajax.readyState==4 && ajax.status==200){
    //     // console.log(ajax.responseText);
    //     let data = JSON.parse(ajax.responseText);
    //     console.log(data);
    //     _this.setState({data: data.data})
    //   }
    // }
    //
    // ajax.open('GET','https://cnodejs.org/api/v1/topics',true);
    // ajax.send();

    // 4jquery
    // let _this = this;
    // $.ajax({
    //   // type: 'GET', //不写默认就是GET请求
    //   // dataType:'jsonp',
    //   // jsonp:'callback',
    //   url:'https://cnodejs.org/api/v1/topics',
    //   success: function (data,status){
    //     console.log(data,status);
    //     _this.setState({data: data.data})
    //   }
    // })
  }

  render(){
    console.log(this.state.data);
    let blogs = this.state.data.map(
      item =>
      <div key={item.id}>
        <img src={item.author.avatar_url} />
        <Link to={`blog/${item.id}`} >{item.title}</Link>
        {/* <a href={`https://cnodejs.org/topics/${item.id}`} target='_blank'>{item.title}</a> */}
        <span>浏览量: {item.visit_count}</span>
      </div>
    )
    return(
      <div className="main-inner">
        {blogs}
      </div>
    )
  }
}
export default App;


// target='_blank' 从新的页面打开
