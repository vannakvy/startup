import React, { useState } from 'react'
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

`

const Thanks = styled.h1`
    text-align: center;
    color: #fff;
  
`
const Loading = styled.h3`
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
`

const ForqSection = ({success, setSuccess,loading, setLoading}) => {

    const newCityRef = doc(collection(db, "customers"));

    const [contact, setContact] = useState('');
    const [name, setName] = useState('');
   
    
const  addData = async()=>{
    try{
       
        await setDoc(newCityRef,{
            name: name,
            contact: contact
        })
       
        setSuccess(true)
        
    }catch(e){
        alert(e.message);
    }
}

    const handelSubmit = (e) => {
        e.preventDefault();
        if (contact !== '' && name !== '') {
            addData();
        }else{
            alert('Please fill all the fields')
        }
    }

    // condition1 ? value1
    //      : condition2 ? value2
    //      : value4;

    return <div>
        {success? <Thanks>Thanks for your interest</Thanks>:
        <form onSubmit={handelSubmit}>
            <FormContainer>
                    <TextInput onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" required />
                        <TextInput onChange={(e)=>setContact(e.target.value)} type="text" placeholder="Your Email or Phone" />
                    <SubmitBtn type="submit">Save</SubmitBtn>
            </FormContainer>
        </form>
}
    </div >

}

export default ForqSection;