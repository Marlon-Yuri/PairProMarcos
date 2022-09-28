import styled, { createGlobalStyle } from "styled-components";
import headerBG from "../../img/headerBG.png";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`;

export const Title = styled.h1`
  font-size: 5em;
  margin-bottom: 200px;
  @media(max-width: 701px){
    font-size: 4em;
  }
  @media(max-width: 650px){
    font-size: 3.3em;
  }
  @media(max-width: 600px){
    font-size: 2em;
  }
`;

export const Header = styled.header`
  background-image: url("${headerBG}");
  background-position: center top;
  background-size: 95%;
  background-repeat: no-repeat;
  height: 625px;
  width: 100%;
  font-family: "Georama", sans-serif;
  @media(max-width: 1100px){
    background-size: 100%;
    background-position: left top;
  }
  @media(max-width: 800px){
    height: 520px;
    background-size: 100% 100%;
  }
`;

export const Section1 = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px 20px 50px;
`;

export const Section2 = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 200px;
  @media(max-width: 801px){
    margin-top: 150px;
  }
  @media(max-width: 600px){
    margin-top: 120px;
  }
  @media(max-width: 510px){
    margin-top: 110px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;

export const Li = styled.li`
  list-style: none;
  padding: 13px;
  &:hover {
    border: 3px solid black;
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Main = styled.main`
  background: rgba(242, 244, 241, 1);
  padding-top: 100px;
  @media(max-width: 890px){
    padding-top: 50px;
  }
`;

export const RecipesFood = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Subtitle = styled.h2`
  width: 100%;
  text-align: center;
  padding: 0 0 20px 0;
  font-family: "Georama", sans-serif;
`;

export const Img = styled.img`
  width: 400px;
  @media(max-width: 410px){
    width: 350px;
  }
`;

export const Img2 = styled.img`
  width: 50%;
  @media(max-width: 1100px){
    width: 70%;
    padding-top: 55px;
  }
`;

export const Div = styled.div`
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(55, 55, 55, 1);
  margin: 25px;
`;

export const Line = styled.p`
  background: rgba(55, 55, 55, 1);
  padding: 0 15px 0 15px;
  width: 50px;
  height: 5px;
  margin: 30px 0 30px 0;
  border-radius: 15px;
  color: rgba(55, 55, 55, 1);
`;

export const Centralizer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Centralizer2 = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  position: relative;
  top: 155px;
  @media(max-width: 1500px){
    top: 80px;
  }
  @media(max-width: 1100px){
    width: 70%;
    top: 0;
    padding-bottom: 50px;
  }
`;

export const Line2 = styled.p`
  background: rgba(55, 55, 55, 1);
  padding: 0 15px 0 15px;
  width: 100px;
  height: 5px;
  margin: 0 0 30px 0;
  border-radius: 15px;
  color: rgba(55, 55, 55, 1);
`;

export const Line3 = styled.p`
  background: rgba(55, 55, 55, 1);
  padding: 0 15px 0 15px;
  width: 70px;
  height: 5px;
  margin-top: -25px;
  border-radius: 15px;
  color: rgba(55, 55, 55, 1);
`;

export const P = styled.p`
  margin-bottom: 70px;
  font-family: "Georama", sans-serif;
`;

export const AboutP = styled.p`
  margin-top: 100px;
  font-family: "Georama", sans-serif;
  width: 60%;
  @media(max-width: 1350px){
    margin-top: 50px
  }
`;

export const AboutSec = styled.section`
  margin: 100px 0 0 0;
  background: white;
  display: flex;
  @media(max-width: 1100px){
    align-items: center;
    flex-direction: column;
  }
`;

export const Subscribe = styled.section`
  padding-top: 100px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background: rgba(223, 228, 222, 1);
  font-family: "Georama", sans-serif;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  padding: 15px;
`;

export const Input = styled.input`
  border: none;
  width: 350px;
  height: 50px;
  margin: 25px 0 0 0;
  padding: 5px;
  @media(max-width: 1100px){
    width: 95vw;
  }
`;

export const Submit = styled.input`
  padding: 13px;
  background: rgba(223, 228, 222, 1);
  margin-top: 30px;
  border: none;
  font-size: 1.5rem;
  &:hover {
    border: 3px solid black;
    padding: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: "Georama", sans-serif;
  align-items: center;
  background: rgba(242, 244, 241, 1);
  padding: 70px 20px 70px 120px;

  nav {
    ul {
        width: 450px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        
        li {
            a {
                text-decoration: none;
            }
        }
    }
  }
  @media(max-width: 1100px){
    padding: 45px 10px 45px 10px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    nav {
      ul {
        width: 350px;
        li {
          font-size: 0.8em;
        }
      }

    }
  }
`;

export const SMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  @media(max-width: 1100px){
    width: 250px;
    margin-top: 20px;
  }
`;

export const Media = styled.img`
  width: 30px;
  cursor: pointer;
  margin: 2px;

  &:hover {
    border-radius: 15px;
    border: 3px solid darkgray;
  }
  @media(max-width: 1100px){
    width: 25px;
  }
`;