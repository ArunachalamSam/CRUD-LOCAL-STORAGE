import React from 'react';

const move =() =>{
    window.location.href='/create'
}
function Read(){

    var n = localStorage.getItem('x')
    const [n1, setN1] =React.useState(JSON.parse(n))

    const Delete =(index) =>{
        const DeleteData =[...n1.slice(0,index),...n1.slice(index +1)];
        setN1(DeleteData);
        localStorage.setItem("x", JSON.stringify(DeleteData));
    };



    return(
        <div className='d-flex bg-warning vh-100 justify-content-center align-items-center'>
            <div className='d-flex bg-white w-50 justify-content-center align-items-center p-3'>
            <button className='btn btn-success' onClick={move}>Add</button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            n1.map((e,index) => {
                                return <tr key={index}>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>
                                        <button className='btn btn-warning ms-5'>Edit</button>
                                        <button className='btn btn-danger' onClick={()=> Delete(index)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Read;