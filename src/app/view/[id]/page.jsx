'use client'
import React, { useEffect, useState } from 'react'
import MDEditor from "@uiw/react-md-editor"
import Link from 'next/link'
import { useParams } from 'next/navigation';

const View = () => {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/service/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <div className="col-md-6 mx-auto">
      <div className="row"><span className="ser-i"><img className="ser-ic" src={icons} /></span>
        <div className="card-shadow m-5 p-3"><span className="ser"><img className="ser-icon" src={icons} /></span>
          <div>
            <MDEditor.Markdown source={userData.content} style={{ whiteSpace: 'pre-wrap' }} />
          </div>
        </div>
      </div>
      <section className="">
        <div className="card bg-dark w-100 mb-5 ">
          <h3 className="text-light p-4">Need help? Contact for free business councelling</h3>
          <Link to='/Contact2' className="btn btn-primary w-25 m-3">Find Councellor</Link>
        </div>
      </section>
    </div>
  )
}

export default View