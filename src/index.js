import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock'
import Comment from './Comment'
import Welcome from './Welcome'
import Toggle from './Toggle'
import LoginController from './LoginController'
import FormName from './FormName'
import FlavorForm from './FlavorForm'
import Resarvation from './Resarvation'
import Calculator from './Calculator'
import {WelcomeDialog,SplitPane} from './WelcomeDialog'
import FilterableProductTable from './thinking_in_react/FilterableProductTable'

  class App extends Component {

    render () {

      return (
        <div>
          <Welcome />
          <Clock />
          <Toggle />
          <LoginController />
          <FormName />
          <FlavorForm />
          <Resarvation />
          <Calculator />
          <WelcomeDialog />
          <SplitPane left={  <Clock />} right={<WelcomeDialog />}/>
          <FilterableProductTable products={PRODUCTS} />
        </div>
      )
    }
  }


  const PRODUCTS =  [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );




//

//
//
// class App extends React.Component {
//
//   render () {
//
//     return (
//       <div>
//         <Welcome name="Naimo"/>
//         <Welcome name="Tazi"/>
//         <Welcome name="Abdel Mounaim"/>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
