import React, {useState} from 'react';

 

// массив.splice(откуда удаляем, сколько элементов удаляем, [вставитьэлемент], [вставить элемент]...); - Метод изменяет сам массив и возвращает при этом массив удаленных элементов.

//массив.slice(откуда отрезать, [докуда отрезать]) - не изменяет исходный массив, возвращает указанную часть массива


const App_33 = (props) => {

  const initNotes = [

                  {

                            id: 'GYi9G_uC4gBF1e2SixDvu',

                            prop1: 'value11',

                            prop2: 'value12',

                            prop3: 'value13',

                  },

                  {

                            id: 'IWSpfBPSV3SXgRF87uO74',

                           prop1: 'value21',

                            prop2: 'value22',

                            prop3: 'value23',

                  },

                  {

                            id: 'JAmjRlfQT8rLTm5tG2m1L',

                            prop1: 'value31',

                            prop2: 'value32',

                            prop3: 'value33',

                  },

                  ];

 

    const [item, setNotes] = useState(initNotes);

    const [_value, setValue] = useState('');

 

    const id = 'IWSpfBPSV3SXgRF87uO74';

    const newElem = {

        id: 'GMNCZnFT4rbBP6cirA0Ha',

        prop1: 'value41',

        prop2: 'value42',

        prop3: 'value43',

        };

 

    const data = {

         id: 'IWSpfBPSV3SXgRF87uO74',

         prop1: 'value21 !',

         prop2: 'value22 !',

         prop3: 'value23 !',

    };

 

    const prop = 'prop1';

    const value = '!!!';

 

    const id_2 = 'JAmjRlfQT8rLTm5tG2m1L';

    const prop_2 = 'prop2';

    const prop_3 = 'prop3';

 

    let filteredItems = item.map((o, i) => { //filter(o => o.id !== id)

      return <p key={o.id}>{o.id} <br />

                 <span>{o.prop1}</span>,

                 <span>{o.prop2}</span>,

                 <span>{o.prop3}</span>

             </p>

    });

 

    function editItemClick(){

      setNotes(item.filter(o => o.id !== id));

 

    }

 

    function addP(){

       setNotes([...item, newElem]);

    }

 

    function changeSecondItem(){

       setNotes(item.map(o => o.id === data.id ? data : o));

 

    }

 

    function changeValue(){

      setNotes(item.map((o, i) => {

        if(o.id === id){

          console.log(item);

           return {...o, [prop]: value};

        }else return o;

      }));

    }

 

    function add_in_end_symbol(){

      setNotes(item.map(o => {

         if(o.id === id_2){

           let val = o.prop2;

            let val_ = o.prop3;

           return {...o, [prop_2] : val+'!', [prop_3]: val_ + '!!'};

         } else return o;

      }));

    }

 

    function selectItem(){

        console.log(item.reduce((res, obj) => {

         if(obj.id === id_2)

           return obj;

        else return res;

       }, {}));

    }

 

    function selectVal(){

      const res = item.reduce((res, obj) => {

         if(obj.id === id_2){

           return obj[prop_2];

         }else return res;

      }, '');

 

      setValue(res);

    }

 

    return <div>

                {filteredItems}

                <button onClick={editItemClick}>del second p</button>

                <button onClick={addP}>add new p</button>

                <button onClick={changeSecondItem}>change item p</button>

                <button onClick={changeValue}>change value</button>

                <button onClick={add_in_end_symbol}>add !</button>

                <button onClick={selectVal}>select value</button>

                <p>{_value}</p>

            </div>

 

};

 

const Obj = (props) => {

  const initDate = {

         year:  2021,

         month: 8,

         day:   23,

       };

 

  const[date, editDate] = useState(initDate);

 

  const [obj, setObj] = useState({

                                      prop1: 'value1',

                                      prop2: 'value2',

                                      prop3: 'value3'

         });

 

  //let btns = Object.keys(obj).map((p, i) => <button key={i}>{p}</button>);

 

  function editItem(e, prop){

    let copy = Object.assign({}, date);

    copy[prop] = +e.target.value;

    editDate(copy);

  }

 

  function editItem_(prop, event) {

         const copy = Object.assign({}, obj);

         copy[prop] = event.target.value;

         setObj(copy);

  }

 

  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  let dayOfWeek = new Date(date.year, date.month - 1, date.day);

  //dayOfWeek.getDay();

 

  return <div>

            <input value={date.year} onChange={(e) => editItem(e, 'year')} />

            <input value={date.month} onChange={(e) => editItem(e, 'month')} />

            <input value={date.day} onChange={(e) => editItem(e, 'day')} />

 

            <br />

            year - {date.year}, month - {date.month}, day - {date.day}, {days[dayOfWeek.getDay()]}

         </div>

};

 

const App_3 = () => {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const [num, setNum] = useState(null);

 

  let items = notes.map((n,i) => {

    return < li key={i} onClick={() => setNum(i)} >

              {n}

           </li>

  });

 

  function addNewItem(e){

     if(num === null){

       let copy = [...notes, ''];

        setNotes(copy);

        setNum(copy.length - 1);

        console.log(copy);

     }

  }

 

  function editItem(e){

    setNotes([...notes.slice(0, num), e.target.value, ...notes.slice(num + 1)]);

  }

 

  return <>

          <ul>

            {items}

          </ul>

          <input onFocus={(e) => addNewItem()} onChange={editItem} value={num === null ? '' : notes[num]} onBlur={() => setNum(null)} />

         </>

};

 

 

const App_2 = () => {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const [val, editVal] = useState('');

  const [num, editNum] = useState(null);

 

  const start = (e, i, n) => {

    editVal(n);

    editNum(i);

  };

 

  let items = notes.map((n,i) => {

    return <li key={i} onClick={(e) => start(e, i, n)}>

              {n}

           </li>

  });

 

  function edit(e){

    editVal(e.target.value);

 

     if(num !== null)

         setNotes([...notes.slice(0, num), e.target.value, ...notes.slice(num + 1)]);

 

  }

 

  function addItem(){

 

    if(num === null)

       setNotes([...notes, val]);

 

    editNum(null);

      editVal('');

  }

 

let input = <input value={num !== null ? notes[num] : val} onChange={(e) => edit(e)} onBlur={addItem} />

 

 

  return <>

          {items}

          {input}

         </>

};

 

const App_1 = () => {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const [val, editVal] = useState('');

  const [num, editNum] = useState(null);

 

  const addItem = () => {

    setNotes([...notes, val]);

    editVal('');

  };

 

  const changeItem = (e) => {

    setNotes([...notes.slice(0, num), e.target.value, ...notes.slice(num + 1)]);

    //

  };

 

  let items = notes.map((n,i) => {

    return <li key={i} onClick={() => editNum(i)}>

              {n}

           </li>

  });

 

 

 

let input = num === null ? <input value={val} onChange={(e) => editVal(e.target.value)} onBlur={addItem} />

                          : <input value={num === null ? '' : notes[num]} onChange={changeItem} onBlur={() => editNum(null)}/>

 

  return <>

          {items}

          {input}

         </>

};

 

function App() {

         const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

         const [editNum, setEditNum] = useState(null);

 

         const result = notes.map((note, index) => {

                   return <p key={index} onClick={() => startEdit(index)}>{note}</p>;

         });

 

         function startEdit(index) {

                   setEditNum(index);

         }

         function editItem(event) {

                   setNotes([...notes.slice(0, editNum), event.target.value,...notes.slice(editNum + 1)]);

         }

         function createItem() {

                   if (!editNum) {

                            const res = [...notes, ''];

                            setNotes(res);

                            setEditNum(res.length - 1);

                   }

         }

         function stopEdit() {

                   setEditNum(null);

         }

 

         return <div>

                   {result}

 

                   <input

                            value={editNum ? notes[editNum] : ''}

                            onChange={editItem}

                            onFocus={createItem}

                            onBlur={stopEdit}

                   />

         </div>;

}

 

 

const Learning = (props) => {

 

  const [editNum, setEditNum] = useState(null);

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

 

  let items = notes.map((n,i) => {

    return <li key={i} onClick={() => setEditNum(i)}>

              {n}

           </li>

  });

 

  const changeItem = (e) => {

    setNotes([...notes.slice(0, editNum), e.target.value, ...notes.slice(editNum + 1)]);

  };

 

  function clearInput (){

    setEditNum(null);

    console.log(editNum);

  }

 

  return (

    <div>

       <ul>

          {items}

       </ul>

       <input value={notes[!(editNum === null) ? editNum : '']} onChange={changeItem} onBlur={clearInput}/>

    </div>

  );

}

 

 

const RestLesson = (props) => {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

 

  const cutItem = (num) => {

  //  setNotes([...notes.slice(0, num), '!!',...notes.slice(num + 1)]);

     let copy = Object.assign([], notes);

     copy.splice(num, 1);

     setNotes(copy);

  };

 

  let items = notes.map((n, i) => {

     return <li key={i}>

             {n} <button onClick={() => setNotes([...notes.slice(0, i), ...notes.slice(i + 1)])}>del</button>

            </li>

  });

 

  return <ul>

              {items}

        </ul>

};

 

 

export default App_33;

 