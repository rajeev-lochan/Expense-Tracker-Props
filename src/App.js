import { useEffect, useState } from 'react';
import './App.css';
import CardHeader from './components/CardHeader/CardHeader';
import CardBody from './components/CardBody/CardBody';

function App() {
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    const storeArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const add = JSON.parse(localStorage.getItem(localStorage.key(i)));
      add.date = new Date(add.date);
      storeArray.push(add);
    }
    setUpdatedData(storeArray);
  }, []);

  useEffect(()=>{
    updatedData.forEach((item) => {
      localStorage.setItem(item.id, JSON.stringify(item));
    })
  }, [updatedData])

  const importDataDetail = (data) => {
    updatedData.push(data)
    localStorage.setItem(data.id, JSON.stringify(data));
    setUpdatedData([...updatedData]);
  };

  const clearDetails = () => {
    localStorage.clear();
    setUpdatedData([]);
  };

  const updateTitle = (id, newTitle) => {
    console.log(id,"id");
    const updatedArray = updatedData.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          title: newTitle
        };
        console.log(updatedItem,"chaeking");
        localStorage.setItem(id, JSON.stringify(updatedItem));
        return updatedItem;
      }
      return item;
    });
  
    setUpdatedData(updatedArray);
  }

  const updateAmount = (id, newAmount,newTitle) => {
    console.log(id);
    const updatedArray = updatedData.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          amount: newAmount,
          title:newTitle
        };
        console.log({updatedItem});
        localStorage.setItem(id, JSON.stringify(updatedItem));
        return updatedItem;
      }
      console.log(newTitle,newAmount)
      return item;
    });
  
    setUpdatedData(updatedArray);
  };

  return (
    <div className="App">
      <CardHeader importData={importDataDetail} clear={clearDetails} />
      <CardBody updatedData={updatedData} updateTitle={updateTitle} updateAmount={updateAmount} />
    </div>
  );
}

export default App;
