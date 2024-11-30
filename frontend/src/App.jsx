import React, { useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
const items = [
  {
    key: 'sub1',
    label: 'Список Криптовалют',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Option 1',
          },
          {
            key: '2',
            label: 'Option 2',
          },
        ],
      },
    ],
  },
];
const App = () => {

const [currencies, setCurrencies] = useState([]);

  const fetchCurrencies = () => {
    axios.get("https://127.0.0.1:8000/cryptocurrencies").then(r=>{
      const currenciesResponse = r.data
      const menuItems = [
        items(label:'Список Криптовалют', key:'g1', icon:null, currenciesResponse.map( c =>{
          label: c.name, key:c.id
          })
        )
      ]
      setCurrencies(currenciesResponse)
    }) // HERE NEED TO PAST LINK FROM FIXED BACKEND
  }

  useEffect( () => {
    fetchCurrencies()
  },[])

  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};


export default App;