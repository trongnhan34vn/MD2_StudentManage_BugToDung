import React, { useEffect, useState } from 'react'
import Student from './Student'

export default function ListStudents(props) {
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Student */}
                            {props.students.map((student, index) => {
            
                                return <Student key={index} student={student} stt={index + 1} />
                            })
                            }
                            {/* Student */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
