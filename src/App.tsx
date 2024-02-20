import React from 'react';
import styled from "styled-components"
import './App.css';
import Cards from 'Cards';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Skeleton from './Skeleton';



interface CatInterface {
  id: string;
  url: string;
}

function App(): JSX.Element {
  const [catArr, setCatArr] = useState<CatInterface[]>([])
  const limit = 45;
  const observerTarget = document.getElementById("target");
  
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    if(entries[0].isIntersecting){
    handleNextLimit();}
    console.log("불러오는 중")
  }
  const observer = new IntersectionObserver(handleObserver, { threshold: 0 });

  const {isLoading, error, refetch} = useQuery('cats', async()=>{
    const API_URL =`https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=live_41tiYuEDSioJw9mVOsS9Hk9NdOySLhzQ6kqN4P11bR7DsQ9HIZXXmnzrxqKuTZHq`;
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    const catData = jsonData.map((catImage: {id: string, url: string}) => ({
      id: catImage.id,
      url: catImage.url
    }))
    setCatArr(((prevCatArr)=>[...prevCatArr, ...catData]))
    return jsonData;
  });

  if(error) return <div>error</div>

  const handleNextLimit = () =>{
    refetch({ queryKey: ['cats', limit] });
  }

  if (observerTarget) {
    observer.observe(observerTarget);
  } else {
    console.error('Element not found.');
  }

  return (
    <>
      <Header>
        <h1>🐱고양이 무한제공 사건🐱</h1>
      </Header>
      <MainContainer>
        <CardsContainer>
         {catArr.map((item: CatInterface) => (
            <Cards key={item.id} data={item} isLoading={isLoading} />
          ))}         
        </CardsContainer>       
      
      </MainContainer>
      <Target id="target"></Target>
      </>
  );
}
export default App;

const Header = styled.section`
  width: 100%;
  height: 100px;
  background-color: #a98744;
  position: absolute;
  top: 0;
  h1 {
    font-size: 30px;
    color: white;
    text-align: center;
  }
`;

const CardsContainer = styled.section`
  margin-top: 100px;
  padding-top: 30px;;
  width: 100%;
  background-color: #ebd2a0;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5,1fr); 
  gap:40px;  
`;

const Target = styled.div`
  background-color: red;
  height: 90px;
  width: 100%;
`

const MainContainer = styled.section`
  background-color: aliceblue;
`