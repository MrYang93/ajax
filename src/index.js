import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import './main.css';

ReactDOM.render(
    <Router/>, document.getElementById('app'));


// class Grandp extends React.Component {
//
//     getChildContext() {
//         return {color: "purole"}
//     }      固定的格式
//
//     render() {
//         return (
//             <div>爷爷辈
//                 <Father/>
//             </div>
//         )
//     }
// }
//
//
// Grandp.childContextTypes = {
//     color: React.PropTypes.string
// }       固定的格式,定义传的类型.
//
//
// class Father extends React.Component {
//     render() {
//         return (
//             <div>父亲辈
//                 <Son/>
//             </div>
//         )
//     }
// }
// class Son extends React.Component {
//     render() {
//         return (
//             <div>儿子辈 {this.context.color}
//             </div>
//         )
//     }
// }
//
// Son.contextTypes = {
//     color: React.PropTypes.string
// }   固定的格式
//
// 随意一个子代想拿到父亲或者以上的东西时,可以用上面方法,了解一下,尽量不用
