import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/actions/PhimAction'

export default function ApiMiddleWare(props) {
    const { mangPhim } = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        //2 loại action trong redux
        //Loại 1: {type: 'Type_name', data: {}}

        //Loại 2: action là function
        const action = layDanhSachPhimAction('GP02');

        //Trong trường hợp action là function thì redux sẽ đợi function thực thi xong => Gửi dữ liệu đi
        dispatch(action)
    }, [])

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="..." />
                    <div className="card-body">
                        <h3>{phim.tenPhim}</h3>
                        <p className="text-justify">{phim.moTa.substring(0,150)}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
