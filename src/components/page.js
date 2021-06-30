import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Page extends Component {
    render() {
        return (
            <div>
                <Pagination>
              
                  
                    <Link to="/">
                   <Pagination.Item href="./pageone.js">{1}</Pagination.Item>
                   </Link> 
                   <Link to="/pagetwo">
                   <Pagination.Item href="./pagetwo.js">{2}</Pagination.Item>
                   </Link> 
                 
                </Pagination>
            </div>
        )
    }
}
