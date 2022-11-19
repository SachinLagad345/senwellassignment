import './App.css';
import { Fragment, useEffect, useState } from 'react';
import Child from './components/Child';

function App() {
    const data = [{name:"sachin",age:26},{name:"sachin",age:26},{name:"sachin",age:26},
    {name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},
    {name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},
    {name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},{name:"shrikant",age:26},
    {name:"sagar",age:26},{name:"sagar",age:26},{name:"shashi",age:26},{name:"Ajinath",age:26},{name:"Krishna",age:5},
    {name:"Krishna",age:5},{name:"Krishna",age:5},{name:"Krishna",age:5}];
  
    // const [resdata, setResdata] = useState([]);
    const resdata = [];
  
    // useEffect(() => {
    //   fetch("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev ")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data.body.data);
    //       const mydata = data.body.data;
    //       setResdata(prevOldData => {
    //           return [prevOldData,...mydata];
    //       });
    //       setLoading(false);
    //     })
    //     .catch((e) => console.log(e));
    // }, []);
  
      data.map((item) => {
        var oc = resdata.find((it) => it.name === item.name);
        if(oc !== undefined)
        {
          resdata[resdata.findIndex((it) => it.name === item.name)].count +=1;
        }
        else
        {
          resdata.push({name : item.name, count : 1});
        }
      })
  
      console.log(resdata);

    return (
      <Fragment>
        <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {console.log("resdata type is " + typeof(resdata))}
          {resdata.map((item,ind) => {
            return (
              <tr key={ind} className={item.count>0 && item.count<3?"red":(item.count<10 ? "yellow":"green")}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <Child></Child>
      </Fragment>
    );
}

export default App;
