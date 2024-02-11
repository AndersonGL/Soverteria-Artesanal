import './style.css'


export default function Footer() {
    return(
      <footer>
        <div className='limitar-secao container-logo-informacoes'>
          <img src='assets/logo.png' alt='logomarca'/>
          <div>
             <h3>ENDEREÇO</h3>
             <p>Av. Paulista s/n</p>
             <p>São Paulo, São Paulo-SP</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>gelateria-artesanal.com.br</p>
                <p>Tel: (11)99999-9999</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO DE SEGUNDA Á SEGUNDA</p>
                <p>10:00hs ás 22:00hs</p>
            </div>
        </div>
        <div className='limitar-secao direto-autoral'>
            <p>© 2024 Gelateria Atersanal - Todos os direitos reservados.</p>
        </div>
    </footer>

  )

}
