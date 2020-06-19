import React, { Component } from 'react';
import {requestData} from '../../../services'
import './List.css'
import {
    Container,
    Table,
    Button
} from 'react-bootstrap';

function List (userList: any){

    return(
    <div >
        <Container className='Container_list' >
                <Button variant="light" onClick={() => requestData('api/users?since=0')}>Light</Button>
            <h1 className='H1'>LISTA</h1>
            <Table striped>
                <thead>
                    <th className='Th'>#</th>
                    <th className='Th'>UserName</th>
                    <th className='Th'># Repos</th>
                    <th className='Th'>LINK</th>
                </thead>
                <tbody>
                    <tr>
                        <td className='Td'>1</td>
                        <td className='Td'>1</td>
                        <td className='Td'>1</td>
                        <td className='Td'>1</td>
                    </tr>
                    <tr>
                        <td className='Td'>2</td>
                        <td className='Td'>2</td>
                        <td className='Td'>2</td>
                        <td className='Td'>2</td>
                    </tr>
                    
                </tbody>
            </Table>
        </Container>
    </div>
    )
}

export default List;