import React from "react"
// Types
import { Movie } from "../utils/types"
// styled components
import styled from "styled-components"
import { Flex } from "../utils/util-styles"
// Utils
import Image from "./image"
// React Start
import ReactStars from "react-stars"

const MovieContainer = styled.div`
  border: 1px solid black;
  /* background-color: #d8d8d8; */
  width: 100%;
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  h2 {
    margin: 0.25rem 0;
    font-size: 24px;
  }
  p {
    margin-bottom: 0.25rem;
  }
`

const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

export const MovieCard = (props: Movie) => {
  const starsArray = [...Array(5).keys()]
  const normalizedStarRating = props.starRating - 1
  return (
    <MovieContainer>
      <PosterContainer>
        <Image imageSrc={props.posterLink} width={100} />
      </PosterContainer>
      <div>
        <h2>{props.title}</h2>
        <Flex alignItems="center">
          <strong>Grade:</strong>{" "}
          <ReactStars
            value={props.starRating}
            count={5}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
        </Flex>
        <p>
          <strong>Director(s): </strong> {props.director}
        </p>
        <p>
          <strong>Cast: </strong> {props.actors.join(", ")}
        </p>
      </div>
    </MovieContainer>
  )
}
