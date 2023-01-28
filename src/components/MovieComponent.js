import styled from "styled-components"

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
font-size: 18px;
font-weight 500;
color: balck;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

const InfoColumn= styled.div`
  display: flex;
  flex-direction: row;
  justify-cotent: space-between;
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
  
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
  
`;

const MovieComponent = (props)=> {
  const { Title, Year, imdbID, Type, Poster}=props.movie;
    return(
      <MovieContainer onClick= {()=> props.onMovieSelect(imdbID)}>
        <CoverImage src={Poster}/>
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>{Year}</MovieInfo>
        <MovieInfo>-{Type}</MovieInfo>
      </InfoColumn>
      </MovieContainer>
    );

};
export default MovieComponent;