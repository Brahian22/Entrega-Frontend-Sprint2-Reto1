import React, { Component } from 'react'
import styled from 'styled-components'
export default class Cards extends Component {

  render() {

//     - Light Grayish Cyan (Background): hsl(180, 52%, 96%)
// - Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
// - Dark Grayish Cyan: hsl(180, 8%, 52%)
// - Very Dark Grayish Cyan: hsl(180, 14%, 20%)

    const DivStyle = styled.div`
      border-radius: 10px;
      background-color: hsl(180, 31%, 95%);
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: row;
      padding: 10px;
      margin: 20px;
    `
    const ImgStyled = styled.img`
      width: 100px;
      height: 100px;
      margin: 10px;
    `
    const NameApp = styled.h2 `
      font-size: 18px;
      color: hsl(180, 29%, 50%);
    `
    const TituloJobs = styled.h1`
      font-size: 25px;
      color: hsl(180, 14%, 20%);
    `
    const TimeStyle = styled.h2 `
      font-size: 18px;
      color: hsl(180, 8%, 52%);
    `
    const EtiquetasStyle = styled.h2`
      font-size: 15px;
      padding: 15px;
      background-color: hsl(180, 52%, 96%);
      color:  hsl(180, 29%, 50%);
      margin: 5px;
      height: 20px;
    `
    const DivEtiquetas = styled.div`
      display: inline-flex;
      justify-content: center;
      margin-top: 20px;
      margin-left: 80px;
    `
    const {image, nameApp, name, time, etiqueta} = this.props.jobs

    return (
      
      <DivStyle className='contenedor_card'>
          <ImgStyled src={image} alt="" />
          <div className='contenedor_text'>
            <NameApp>{nameApp}</NameApp>
            <TituloJobs>{name}</TituloJobs>
            <TimeStyle>{time}</TimeStyle>
          </div>
          <DivEtiquetas>
            <EtiquetasStyle>{etiqueta.e1}</EtiquetasStyle>
            <EtiquetasStyle>{etiqueta.e2}</EtiquetasStyle>
            <EtiquetasStyle>{etiqueta.e3}</EtiquetasStyle>
            <EtiquetasStyle>{etiqueta.e4}</EtiquetasStyle>
            <EtiquetasStyle>{etiqueta.e5}</EtiquetasStyle>
          </DivEtiquetas>
      </DivStyle>

    )
  }
}
