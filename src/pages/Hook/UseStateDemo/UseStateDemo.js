import React, { useState } from 'react'

export default function UseStateDemo(props) {

    const [like, setLike] = useState(1);
    // const [state, setState] = useState({like: 1})
    const [color, setColor] = useState('black')

    let imgSrc = `./img/CarBasic/products/${color}-car.jpg`;

    return (
        <div className="container">
            <h3>Demo useState</h3>
            <div className="card w-25">
                <img src="https://picsum.photos/1000/1000" className="w-100" />
                <div className="card-body">
                    <p>{like} Like</p>
                    <button className="btn btn-outline-danger" onClick={() => {
                        setLike(like + 1);
                    }}>Like</button>
                </div>
            </div>
            <hr></hr>
            <h3>Bài tập chọn màu xe</h3>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={imgSrc} className="w-100" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <button class="btn m-2 col-3" style={{ backgroundColor: '#000', color: '#fff' }} onClick={() => { setColor('black') }}>Black</button>
                            <button class="btn m-2 col-3" style={{ backgroundColor: 'red', color: '#fff' }} onClick={() => { setColor('red') }}>Red</button>
                            <button class="btn m-2 col-3" style={{ backgroundColor: 'silver', color: '#fff' }} onClick={() => { setColor('silver') }}>Silver</button>
                            <button class="btn m-2 col-3" style={{ backgroundColor: 'grey', color: '#fff' }} onClick={() => { setColor('steel') }}>Steel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
