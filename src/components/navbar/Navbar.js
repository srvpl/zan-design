import React from 'react'
import './navbar.css'
import {BsFillCartFill} from 'react-icons/bs'


const Navbar=()=>{
    return(
        <div>
     <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container">
        <a class="navbar-brand nav-logo" href="#"><img src="./images/zan-logo.png" height={"35px"} width={"150px"}/></a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div class="collapse navbar-collapse nav-item-wrapper" id="navbarsExample07">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link nav-header-text">HENG PRO MINI </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-header-text">HENG PRO</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-header-text">LYBRA</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-header-text">ABOUT US</a>
            </li>
          </ul>
          <button class="nav-btn" data-toggle="modal" data-target="#exampleModalLong">
            <BsFillCartFill style={{marginRight:"5px"}}/>
            <span>Cart</span>
            <span class="nav-cart-count">0</span>
          </button>

          <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Your Cart</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  No items found.
                </div>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </nav>
        </div>
    )
}
export default Navbar;