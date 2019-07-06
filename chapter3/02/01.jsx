let element = <h1>Hello world!</h1>

let name = 'world';
let element = <h1>Hello {name}</h1>

if(user){
  return <h1>Hello {user}</h1>
}else{
  return <h1>Hello</h1>
}

//不止一行標籤
let element = (
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
)


//不使用JSX方法
let element = <h1 id="title">Hello</h1>

//等同於
let element = React.createElement('h1',{id:"title"},'Hello');

//functuin 嵌入
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

//jsx 特定屬性
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
