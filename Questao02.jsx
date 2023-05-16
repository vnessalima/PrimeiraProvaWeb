import { useEffect, useState } from "react"

const Questao02 = () => {

    //variavel que armazena as imagens 
    const [img, setImg] = useState("")
    const [virado, setVirado] = useState(false)

    const frenteImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png` //pokemon de frente
    const costaImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png` //pokemon de costas

    useEffect(
        //funcao que será ativada quando a variavel abaixo for modificada
        () => {
            if (virado === true) setImg(frenteImg)
            else setImg(costaImg)
        },
        //variavel que será observada
        [virado]
    )

    //funcao que será acionada com o evento onClick do button em JSX
    const viradoImg = () => {
        if(virado === true) setVirado(false)
        else setVirado(true)
    }

    return (
        <div>
            <img src={img} style={{ width: "400px" }} />
            <button
                onClick={viradoImg}  //botao para virar e desvirar o pokemon
            >Virado</button>
        </div>
    )
}

export default Questao02