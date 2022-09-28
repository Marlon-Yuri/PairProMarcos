import React from "react";
import * as S from "./style/RecipesStyle";
import { GlobalStyle } from "./style/RecipesStyle";
import bolo from "../img/bolo.png";
import colher from "../img/colher.png";
import pizza from "../img/pizza.png";
import smoothie from "../img/smoothie.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import pinterest from "../img/pinterest.png";

export default function Recipes() {

    function Send(e) {
        e.preventDefault();
    }

    return (
        <div>
            <GlobalStyle />
            <S.Header>
                <S.Section1>
                    <h2>RC</h2>
                    <nav>
                        <S.Ul>
                            <S.Li><a href="#About">ABOUT</a></S.Li>
                            <S.Li><a href="#Recipes">RECIPES</a></S.Li>
                            <S.Li><a href="#Subscribe">SUBSCRIBE</a></S.Li>
                        </S.Ul>
                    </nav>
                </S.Section1>
                <S.Section2>
                    <S.Title>R E C I P E S</S.Title>
                </S.Section2>
            </S.Header>
            <a name="Recipes" />
            <S.Main>
                <S.Subtitle>LATEST RECIPES</S.Subtitle>
                <S.Centralizer>
                    <S.Line2 />
                </S.Centralizer>
                <S.RecipesFood className="recipes">
                    <S.Div className="Cake">
                        <S.Img src={bolo}></S.Img>
                        <S.Line />
                        <S.P>Red Velvet Cake</S.P>
                    </S.Div>
                    <S.Div className="Pizza">
                        <S.Img src={pizza}></S.Img>
                        <S.Line />
                        <S.P>Margherita Pizza</S.P>
                    </S.Div>
                    <S.Div className="Smoothie">
                        <S.Img src={smoothie}></S.Img>
                        <S.Line />
                        <S.P>Peanut Smoothie</S.P>
                    </S.Div>
                </S.RecipesFood>
                <a name="About" />
                <S.AboutSec name="About" className="About">
                    <S.Img2 src={colher}></S.Img2>
                    <S.Centralizer2>
                        <S.Subtitle name="About">ABOUT</S.Subtitle>
                        <S.Line3 />
                        <S.AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.AboutP>
                    </S.Centralizer2>
                </S.AboutSec>
            </S.Main>
            <a name="Subscribe" />
            <S.Subscribe>
                <S.H2>S U B S C R I B E</S.H2>
                <h3>Sign up for newsletter</h3>
                <form onSubmit={Send}>
                    <S.Input type="email" placeholder="Your Email"/>
                </form>
                <S.Submit type="submit" value="S U B M I T" />
            </S.Subscribe>
            <S.Footer>
                <S.SMedia>
                    <S.Media src={instagram} />
                    <S.Media src={facebook} />
                    <S.Media src={twitter} />
                    <S.Media src={pinterest} />
                </S.SMedia>
                <nav>
                    <S.Ul>
                        <S.Li><a href="#About">ABOUT</a></S.Li>
                        <S.Li><a href="#Recipes">RECIPES</a></S.Li>
                        <S.Li><a href="#Subscribe">SUBSCRIBE</a></S.Li>
                    </S.Ul>
                </nav>
            </S.Footer>
        </div>
    );
}