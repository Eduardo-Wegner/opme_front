import React, { Component, useEffect } from 'react';
import { requestData } from '../../../services';
import './Repos.css';
import {
    Container,
    Row
} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Repos(props: any) {
    let { userLogin } = useParams();
  
    const [user_repos, set_user_repos] = React.useState([]);
    const [items, set_items] = React.useState(100);
    const [activePage, set_activePage] = React.useState(1);
    const [loading, set_loading] = React.useState(true);
    useEffect(() => {
    console.log(props)
        props.public_repos % 30 > 0 ? set_items(parseInt((props.public_repos / 30).toFixed()+1)):set_items(parseInt((props.public_repos/30).toFixed()))
        requestData('/api/users/' + userLogin + '/repos?count=0').then((result: any) => {
            console.log(result)
            set_user_repos(result)
            set_loading(false)

        })  
    }, [props])

      return (
        <div>
              
            <hr style={{ backgroundColor: '#fff',marginTop:'5em' }} />
            <Container className='Container_list'>
                  <h1 className='H1'>{userLogin} Repositories:</h1>
                  <BarLoader
                      css={override}
                      size={500}
                      color={"#123abc"}
                      loading={loading}
                  />
               {!loading && <BootstrapTable data={user_repos} striped hover containerStyle={{ paddingBottom: '5em' }}>
                    <TableHeaderColumn isKey dataField='id' columnClassName='Td' className='Th'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' columnClassName='Td' className='Th'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='html_url' columnClassName='Td' className='Th' dataFormat={CellFormatter}></TableHeaderColumn>
                </BootstrapTable> }
                <Row style={{justifyContent:'flex-end', paddingBottom:'5em'}}>
                  <Pagination
                      activePage={activePage}
                      itemsCountPerPage={30}
                      totalItemsCount={props.public_repos}
                      pageRangeDisplayed={5}
                      itemClass="page-item"
                      linkClass="page-link"
                      onChange={(page)=>{
                          console.log(page)
                          set_activePage(page)
                          set_loading(true)
                            requestData('/api/users/' + userLogin + '/repos?count='+page).then((result: any) => {
                                console.log(result)
                                set_user_repos(result)
                                set_loading(false)
                            })  
                      }}
                  /> 
                </Row>              
            </Container>
        </div>
    )
}

function CellFormatter(cell: string) {
    return (<a href={cell} target="_blank">{cell}</a>);
}

export default Repos;