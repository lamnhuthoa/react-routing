import axios from 'axios'
import { history } from '../../App';
import { TOKEN_CYBERSOFT, ACCESS_TOKEN, USER_LOGIN, GROUP_ID } from '../../util/settings'

export const dangKyAction = (thongTinNguoiDung) => {
    return (dispatch, getState) => {
        //promise sẽ dùng trong tình huống gọi các api không phụ thuộc giá trị nhau
        const promise = axios({
            url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: thongTinNguoiDung,
            headers: {
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        });

        promise.then(result => {
            console.log({ result })
            // Thành công => Chuyển hướng trang
            alert('Đăng ký thành công!');
            history.push('/login');
        })

        promise.catch(error => {
            console.log('result', error.response?.data)
            console.log({ error })
        })
    }
}


export const dangKyAsyncAction = (thongTinNguoiDung, history) => {
    //async await dùng khi những api cần thực hiện 1 cách tuần tự
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: thongTinNguoiDung,
                headers: {
                    'TokenCybersoft': TOKEN_CYBERSOFT
                }
            });
        } catch (error) {
            console.log({error})
        }
    }
}

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/dangnhap`,
                method: 'POST',
                data: thongTinDangNhap,
                headers: {
                    'TokenCybersoft': TOKEN_CYBERSOFT
                }
            })
            //Lưu vào localstorage thông tin đăng nhập
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            const sUserLogin = JSON.stringify(result.data.content);

            localStorage.setItem(USER_LOGIN, sUserLogin);
            //Sau khi lưu vào store sẽ đưa dữ liệu lên redux
            dispatch({
                type: 'LOGIN',
                userLogin: result.data.content
            })

            console.log('result', result)

        } catch (error) {
            console.log({error})
        }
    }
}