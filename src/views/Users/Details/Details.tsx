import React, { Component, useEffect } from 'react';
import { requestData } from '../../../services';
import './Details.css';
import {
    Container,
    Navbar,
    Nav,
    Table
} from 'react-bootstrap';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {Repos} from '../index';
import { useParams } from 'react-router-dom';

function Details(user: any) {
    let {userLogin} = useParams();
    const [user_details, set_user_details] = React.useState({ id: '', login: '', html_url:''});
    useEffect(() => {
        requestData('/api/users/'+userLogin+'/details').then((result: any) => {
            console.log(result)
            set_user_details(result)            
        })
    }, [])

    return (
        <div>
        <Container className='Container_list'>
            <h1 className='H1'>{userLogin} Details:</h1>
            <Table bordered style={{paddingTop:'5em', paddingBottom:'2em'}}>
                <tbody>
                    <tr>
                        <td className='Td'>Id:</td>
                        <td className='Td'>{user_details.id}</td>
                    </tr>
                    <tr>
                        <td className='Td'>Login:</td>
                        <td className='Td'>{user_details.login}</td>
                    </tr>
                    <tr>
                        <td className='Td'>Profile URL:</td>
                            <td className='Td'><a href={user_details.html_url} target="_blank">{user_details.html_url}</a></td>
                    </tr>
                </tbody>
            </Table>
            
        </Container>
        <Repos {...user_details} />
        </div>
    )
}

export default Details;