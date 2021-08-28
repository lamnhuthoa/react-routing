import React, { useState } from 'react'
// import { Prompt } from 'react-router-dom'
import { useFormik } from 'formik'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { useDispatch } from 'react-redux'

export default function Login(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: (values) => {
            //Gọi actionDangNhap
            const action = dangNhapAction(values);
            dispatch(action);
            console.log(values);

        }
    })

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input type="text" className="form-control" name="taiKhoan" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success mr-2">Login</button>
                <button type="button" className="btn btn-danger" onClick={() => { props.history.goBack() }}>Go back</button>
            </div>
        </form>
    )
}
