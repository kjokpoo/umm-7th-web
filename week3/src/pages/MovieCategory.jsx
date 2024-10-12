import Categorybox from "../components/Categorybox";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;
`;
const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  margin-left: 1vw;
`;

export default function MovieCategory() {
  return (
    <>
      <div style={{ color: "white", fontSize: "2rem", fontWeight: "600", marginBottom: "2vh" }}>카테고리</div>
      <GridStyle>
        {/* 현재 상영중인 영화 */}
        <LinkStyle to="/moviecategory/nowplaying">
          <Categorybox catImg={movie1} text={"현재 상영중인"} />
        </LinkStyle>
        {/* 인기있는 영화 */}
        <LinkStyle to="/moviecategory/popular">
          <Categorybox catImg={movie2} text={"인기있는"} />
        </LinkStyle>
        {/* 높은 평가를 받은 영화 */}
        <LinkStyle to="/moviecategory/toprated">
          <Categorybox catImg={movie3} text={"높은 평가를 받은"} />
        </LinkStyle>
        {/* 개봉 예정중인 영화 */}
        <LinkStyle to="/moviecategory/upcoming">
          <Categorybox catImg={movie4} text={"개봉 예정중인"} />
        </LinkStyle>
      </GridStyle>
    </>
  );
}