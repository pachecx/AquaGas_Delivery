import React from 'react'

const EditarEstabelecimento = () => {
  return (
    <div className=''>
        <h1>Editar Perfil</h1>
        
        <div>
            <form>
            <div className=''>
                    <label htmlFor='nomeEmpresa'>Nome da empresa</label>
                    <input className='border' type='text' name='nomeEmpresa'/>
                </div>
                <div className=''>
                    <label htmlFor='cidade'>Cidade</label>
                    <input className='border' type='text' name='cidade'/>
                </div>
                <div className=''>
                    <label htmlFor='bairro'>Bairro</label>
                    <input className='border' type='text' name='bairro'/>
                </div>
                <div className=''>
                    <label htmlFor='rua'>Rua</label>
                    <input className='border' type='text' name='rua'/>
                </div>
                <div className=''>
                    <label htmlFor='numero'>Numero</label>
                    <input className='border' type='text' name='numero'/>
                </div>
                <div className=''>
                    <h3>Delivery</h3>
                    <div>
                    <label htmlFor='entrega'>Sim</label>
                    <input className='border' type='radio' name='entrega' value={'Sim'}/>
                    </div>

                    <div>
                    <label htmlFor='entrega'>Não</label>
                    <input className='border' type='radio' name='entrega' value={'Não'}/>
                    </div>
                  

                </div>

                <button type='submit'>Salvar</button>
            </form>
        </div>
    </div>
  )
}

export default EditarEstabelecimento