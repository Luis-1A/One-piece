import './Memorandum.css'

// Mostrar o texto completo (o texto é parcialmente oculto em telas menores)
const mostrarMemorandum = (e) => {
    document.querySelector('.memorandum').style.maxHeight = '100%';
    e.target.parentNode.style.display = 'none';
}

export default function Memorandum() {
    return (
        <section className='memorandum'>
            <h2>Mensagem Importante</h2>
            <p><strong>Atenção a todos os Oficiais e Membros da Infantaria estacionados no Novo Mundo!</strong></p>
            <p>A chamada "Pior Geração" está navegando em nossas águas e é imperativo que os capturemos e suas tripulações.</p>
            <p>Abaixo você encontrará o organograma de tripulações de piratas conhecidas. Se encontrar algum desses canalhas, não entre em batalha e informe imediatamente ao seu Capitão. Repito: <strong>não entre em batalha!</strong> Estes são piratas extremamente perigosos com recompensas de mais de <span className='noLineBreak'><img src='/images/belly.png' alt='moeda belly' className='belly' />100.000.000</span>.</p>
            <p>Se necessário, utilize os botões correspondentes para registrar um novo pirata ou tripulação de piratas.</p>
            <p className='signature'>— Almirante da Frota Sakazuki</p>
            <div className="read-memorandum">
                <button onClick={mostrarMemorandum}>Ler Mais</button>
            </div>
        </section>
    )
}
