import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

function Currencyexchange(){
    const columns = [
        {
          title: 'Currency',
          dataIndex: 'Currency',
          key: 'Currency',
        
        },
        {
          title: 'Price',
          dataIndex: 'Price',
          key: 'Price',
        },
        {
          title: '% Change',
          dataIndex: '% Change',
          key: '% Change',
        }]

   return(
       <>
       <Table columns={columns} />
       </>
   )
}
export default Currencyexchange;