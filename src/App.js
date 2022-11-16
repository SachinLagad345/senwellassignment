import './App.css';
import { Fragment, useEffect, useState } from 'react';

function App() {
    const data = [];
  
    const [resdata, setResdata] = useState([]);
    const [loading,setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev ")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.body.data);
          const mydata = data.body.data;
          setResdata(prevOldData => {
              return [prevOldData,...mydata];
          });
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }, []);
  
      resdata.map((item) => {
        var oc = data.find((it) => it.name === item.CameraType);
        if(oc !== undefined)
        {
          data[data.findIndex((it) => it.name === item.CameraType)].count +=1;
        }
        else if(item.CameraType !== undefined)
        {
          data.push({name : item.CameraType, count : 1});
        }
      })
  
      console.log(data);

    return (
      <Fragment>
        <table>
        {loading ? null : <thead>
            <tr>
              <th>CameraType</th>
              <th>Count</th>
            </tr>
          </thead>}
          <tbody>
          {console.log("resdata type is " + typeof(resdata))}
          {data.map((item,ind) => {
            return (
              <tr key={ind} className={item.count>0 && item.count<3?"red":(item.count<10 ? "yellow":"green")}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </Fragment>
    );
}

export default App;
