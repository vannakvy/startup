import TopSection from "./components/TopSection";
import FormSection from "./components/FormSection";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CircularProgress } from "react-cssfx-loading/lib";



const TopSectionContainer = styled.div`
display: flex;
flex-direction: column;
    padding: 20px;
    text-align: center;
    height: 100vh;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <TopSectionContainer>
      <TopSection success={success} setSuccess={setSuccess} />
      <FormSection success={success} setSuccess={setSuccess} />
    </TopSectionContainer>
  );
  }

export default App;
