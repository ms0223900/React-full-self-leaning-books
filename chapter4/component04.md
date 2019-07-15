1. 組件裡有什麼

在開發React的思維就是去思考在這個頁面中，有哪些Element是重複出現或是相似度高的，將這些Element用JSX建立成一個Components，讓每個Components擁有重複性及可擴充性

````javascript
let title = <h1>Hello, world!</h1>

ReactDOM.render(title,document.getElementById('root'))
````

Class 組件

```` javascript
class HelloTitle extends React.Component {
    render() {
        return <h1>Hello, world！</h1>
    }
}
ReactDOM.render(<HelloTitle />,document.getElementById('root'))
````



2. 事件處理與狀態更新

Event Handlers

State Update
https://codesandbox.io/embed/intelligent-chebyshev-fj125

3. 組件的自訂函式
https://medium.com/@brianwu291/react-series-part4-conponent-driven-development-7535b6b66876

4. props: 上面傳下來的屬性
   Props 主要是提供值給組件使用，屬性或是資料。
   Props（Property）有幾個特點：

   1. Props是由父層傳遞下去
   2. Props是不可以自己做更改
   3. 只要父層的Props值有變動，Component即會重新render

   ````javascript
   class HelloTitle extends React.Component {
     render(){
       return <h1>Hello, {this.props.name}！</h1>
     }
   }

   let titleDiv = (
   	<div>
     	 <HelloTitle name="GQSM" />
        <HelloTitle name="Horse" />
     </div>
   )

   ReactDOM.render(titleDiv,document.getElementById('root'))
   ````

5. 應用練習: 「計數器」

6. Vue
