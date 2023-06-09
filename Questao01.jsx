import { useEffect, useState } from "react"

const correntistas= [
    { nome: "Sicrano", aplic: {pp: 856.4, rf: 50.4, cc: 34.0} },
    { nome: "Beltrano", aplic: {pp: 0.0, rf: 700.67, cc: 800} },
    { nome: "Fulano", aplic: {pp: 5000.00, rf: 0.0, cc: 500} }
    ];
    
export const Questao01X = () => { 
    const [medias, setMedias] = useState();
    const [render, setRender] = useState();
    function comunicacao_filho(param){
        setMedias(param);
    } 

    useEffect(() => { //aqui dentro é feita uma verificação se o estado foi atualizado 
        if(medias){
            var name = medias.map((x, r) => 
                {
                    let n = Math.max(...medias)
                    if(x == n){
                        return correntistas[r].nome
                    }
                }
            )
            setRender(() => {
                return (
                    <div>
                        {name}
                    </div>
                )
            })
        }
    }, medias)

    return(
        <div>
            <Questao01Y correntistas={correntistas} comunicacao={comunicacao_filho} ></Questao01Y>
            {render}
        </div>
    )
}
const Questao01Y = (props) => { //essa parte do codigo é renderizada passando as propriedades correntistas e comunicacao para ele
    useEffect(() => {
        let { correntistas, comunicacao } = props;
        let media_aplicacoes = [];
        //metodo de mapeamento de arrays
        correntistas.map((element) => {
            let {pp, rf, cc} = element.aplic;
            media_aplicacoes.push((pp+rf+cc)/3); //calcular as médias das aplicações 
        });
        comunicacao(media_aplicacoes)
    }, [])
    return(
        <div>
        </div>
    )
}