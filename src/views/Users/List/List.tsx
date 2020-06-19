import React, { Component, useState,useEffect } from 'react';
import {requestData} from '../../../services'
import './List.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {
    Link
} from 'react-router-dom';
import {
    Container,
    Table,
    Button,
    Row
} from 'react-bootstrap';
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function List (userList: any){
    const [user_array, set_user_array] = React.useState([]);
    const [next_link, set_next_link] = React.useState();
    const [loading, set_loading] = React.useState(true);
    useEffect(() => {
        requestData('api/users?since=0').then((result: any)=>{
        console.log(result)
        set_user_array(result.data)
        set_next_link(result.next_link)
        set_loading(false)
        console.log(user_array) })
    },[])
    return(
    <div >
        <Container className='Container_list' >
                
            <h1 className='H1'>LISTA</h1>
                <BarLoader
                    css={override}
                    size={500}
                    color={"#123abc"}
                    loading={loading}
                />
                {!loading && <BootstrapTable data={user_array} striped hover containerStyle={{paddingBottom:'5em'}}>
                    <TableHeaderColumn isKey dataField='id' columnClassName='Td' className='Th'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='login' columnClassName='Td' className='Th' dataFormat={CellFormatter}></TableHeaderColumn>
                </BootstrapTable>}
                <Row style={{justifyContent: 'flex-end',paddingBottom: '5em'}}>
                    <Button variant="light" onClick={() =>{
                        set_loading(true)
                        requestData(next_link).then((result: any) => {
                        console.log(result)
                        set_user_array(result.data)
                        set_next_link(result.next_link)
                        set_loading(false)
                        console.log(user_array)
                    })}}>Next ></Button>
                </Row>
        </Container>
    </div>
    )
}

function CellFormatter(cell:string) {
    return (<Link to={'/Details/'+cell}>{cell}</Link>);
}

