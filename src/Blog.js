import React from 'react';

import axios from 'axios';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      blog: {}
    }
  }

  componentWillMount() {
    axios.get(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`)
      .then( res => this.setState({blog: res.data.data}) )
  }

  handleClick(){
    this.props.router.goBack(); //router 方法
    // this.context.router.push('/')  context方法
  }

  render(){
    // console.log('sadasd',this.context.router);
    return(
      <div>
        <button onClick={this.handleClick.bind(this)} >返回</button>
        <div dangerouslySetInnerHTML={{__html: this.state.blog.content}} className="blog"></div>
      </div>
    )
  }
}

// Blog.contextTypes ={
//   router: React.PropTypes.object
// }   固定格式

export default Blog;



//我们拿到外来的标签及内容,为了安全,网站不被攻击,需要用
//<div dangerouslySetInnerHTML={{__html: this.state.blog.content}}></div> 来加载进去,
//                                       这部分就是我们得到的标签及内容
