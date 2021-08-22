import { DatePicker } from 'antd'
import React from 'react'
import { AdminTemplate } from '../../Templates/AdminTemplate'

export default function AntDemo(props) {
    return (
        <div className="container">
            <DatePicker/>
            <AdminTemplate/>
        </div>
    )
}
