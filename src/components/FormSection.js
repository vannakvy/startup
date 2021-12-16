import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import { CircularProgress} from 'react-cssfx-loading/lib'

import { collection, doc, setDoc } from "firebase/firestore";



const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    heigth: 20px;

`

const SubmitBtn = styled.button`
    background: #4CAF50;
    color: #fff;
    max-width: 400px;
    min-width: 150px;
    align-self: center;
    border: none;
    padding: 5px;
    border-radius: 5px;
    height: 45px;
    font-size: 1.2rem;
    font-family: 'Siemreap';
    &:hover{
        background: purple;
        cursor: pointer;
     

    }
  
`
const TextInput = styled.input`
    align-self: center;
    border: none;
    padding: 5px;
    border-radius: 5px;
    height: 30px;
    border: 1px solid #ccc; 
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    width: 300px;
    font-size: 1rem;
    height: 35px;
    margin-bottom: 10px;
    font-family: 'Siemreap';

`

const Thanks = styled.h1`
    text-align: center;
    color: #fff;
    font-family: 'Siemreap';
  
`
const Loading = styled.h3`
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    font-family: 'Siemreap';
`

const ForqSection = ({success, setSuccess,loading, setLoading}) => {

    const newCityRef = doc(collection(db, "customers"));
    const newCityRef2 = doc(collection(db, "cusNumbers"));

    const [contact, setContact] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   
    
const  addData = async()=>{
    try{
       
        await setDoc(newCityRef,{
            name: name,
            contact: contact,
            email: email,
            createdAt: new Date()
        })
       
        setSuccess(true)
        
    }catch(e){
        alert(e.message);
    }
}

const  addData2 = async()=>{
    try{
       
        await setDoc(newCityRef2,{
            name: "arrive",
            contact: "arrive",
            createdAt: new Date()
        })
       
       
        
    }catch(e){
        console.log(e.message);
    }
}

useEffect(()=>{
    addData2();
},[])

    const handelSubmit = (e) => {
        e.preventDefault();
        if (contact !== '' && name !== '') {
            addData();
        }else{
            alert('សូមបញ្ចូលព័ត៌មានបានត្រឹមត្រូវ')
        }
    }

    // condition1 ? value1
    //      : condition2 ? value2
    //      : value4;

    return <div>
        {success? <Thanks>អរគុណសំរាប់ការចាប់អារម្មរបស់អ្នក់</Thanks>:
        <form onSubmit={handelSubmit}>
            <FormContainer>
                    <TextInput onChange={(e)=>setName(e.target.value)} type="text" placeholder="ឈ្មោះរបស់អ្នក" required />
                        <TextInput onChange={(e)=>setContact(e.target.value)} type="text" placeholder="លេខទូរស័ព្ធ" />
                        <TextInput onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="អុីម៉ែលអ្នក" />
                    <SubmitBtn type="submit">រក្សាទុក</SubmitBtn>
            </FormContainer>
        </form>
}
    </div >

}

export default ForqSection;