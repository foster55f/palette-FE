import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';
import Color from '../Color/Color'
import PalettesContainer from '../PalettesContainer/PalettesContainer';
import Palette from '../Palette/Palette';

export const PaletteForm = () => {
  const [currentColors, setCurrentColors] = useState({
    color1: {id: 1, color: ''},
    color2: {id: 2, color: ''},
    color3: {id: 3, color: ''},
    color4: {id: 4, color: ''},
    color5: {id: 5, color: ''}
  })

  const generatePalette = () => {
    setCurrentColors({
      color1: {id: 1, color: Math.floor(Math.random()*16777215).toString(16)},
      color2: {id: 2, color: Math.floor(Math.random()*16777215).toString(16)},
      color3: {id: 3, color: Math.floor(Math.random()*16777215).toString(16)},
      color4: {id: 4, color: Math.floor(Math.random()*16777215).toString(16)},
      color5: {id: 5, color: Math.floor(Math.random()*16777215).toString(16)}
    })
  }

  useEffect(() => {
    generatePalette();
  }, [])

  return (
    <form className="add-palette-form">
      <div className="add-palette-form-top">
        <div className="name-palette-wrapper">
          <label className="name-palette-label">PALETTE NAME</label>
          <input className="name-palette-input" type="text"></input>
        </div>
        <div className="palettes-wrapper">
          <Palette 
            currentColors={currentColors} />
        </div>
      </div>
      <button className="generate-palette-button" type="button">new palette</button>
      <button className="add-palette-button" type="button">add to project</button>
      {/* <PalettesContainer /> */}
    </form>
  )
}

export default PaletteForm;
