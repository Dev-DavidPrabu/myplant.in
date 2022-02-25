import React from "react";


const Header = (props) => {

    return (
        <>
            <header>

                <div className="text-center pt-3">
                    <a className="float-end btn btn-info" href="#/signin">SignIn</a>
                    <a className="text-decoration-none" href="#">
                        <h3 className="display-4">My Plants.in</h3>
                    </a>
                </div>
                <div className="">
                    <a href="">
                        {props.countCartItems ? (
                            <button>{props.countCartItems}</button>)
                            : ("")
                        }
                    </a>
                </div>

            </header>
        </>
    )
}


export default Header