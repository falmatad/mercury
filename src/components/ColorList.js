import React from "react"
import ColorCard from "./ColorCard"

const ColorList = (props) => {
    return(
      <div>
        {props.colors.map( color => {
          return <ColorCard key={color}>{color}</ColorCard>
        })}
      </div>
    )
  }