import React from 'react'
import styled from 'styled-components'
import { FlippingSquare, Hypnosis, TwinSpin } from 'react-cssfx-loading/lib'



const BrandTitle = styled.h1`
    margin-top: 0;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;  
    font-family: 'ubuntu';
`
const CommingSoon = styled.h2`
    margin-top: 0px;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
    font-family: 'ubuntu';
    color: purple;
`

const QuestionTitle = styled.h1`
    margin-top: 20px;
    font-size: 1rem;
    color: purple;
    text-transform: capitalize;
    font-family: 'Siemreap';
`


const TopSection = ({success, setSuccess}) => {
    return <>
        <BrandTitle>Coding Cambodia</BrandTitle>
        <CommingSoon>Comming Soon</CommingSoon>
        <Hypnosis color="green" style={{marginLeft:'auto',marginRight:'auto'}}  width="80px" height="80px" duration="2s"/>
        {!success &&<QuestionTitle>
            បញ្ចូលអ៊ីមែល ឬលេខទូរស័ព្ធរបស់អ្នកដើម្បីទទួលបានការបញ្ជូនសាររបស់យើង​ ពេលយើងរួចរាល់។
        </QuestionTitle>
}
   </>
}

export default TopSection;