import React, { useState } from 'react'
import {Prompt} from 'react-router-dom'

export default function Login(props) {

    const [state, setState] = useState({isSaveForm: true, taiKhoan: '', matKhau: '' })
    console.log(state)

    const handleChangeInput = (event) => {
        let { value, name } = event.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.taiKhoan === 'cybersoft') {
            props.history.push('/home');       //Xử lý nghiệp vụ thành công mới chuyển hướng trang
            // props.history.replace('/home'); //Thay đổi trang hiện tại thành trang có path tương ứng
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng!');
        }
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input type="text" className="form-control" name="taiKhoan" onChange={handleChangeInput}></input>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input type="password" className="form-control" name="matKhau" onChange={handleChangeInput}></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success mr-2">Login</button>
                <button type="button" className="btn btn-danger" onClick={() => {props.history.goBack()}}>Go back</button>
            </div>
            <Prompt when={state.isSaveForm} message={(location) => {

                return 'Bạn có chắc muốn rời khỏi trang này?'
            }} />
        </form>
    )
}
