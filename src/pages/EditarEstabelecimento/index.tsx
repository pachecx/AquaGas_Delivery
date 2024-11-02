import React from 'react'

const EditarEstabelecimento = () => {
  return (
    <div className='p-3'>
        <h1>Editar Perfil</h1>
        
        <div>
            <form>
            <div className='flex flex-col'>
                    <label htmlFor='nomeEmpresa'>Nome da empresa</label>
                    <input className='border' type='text' name='nomeEmpresa'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='cidade'>Cidade</label>
                    <input className='border' type='text' name='cidade'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='bairro'>Bairro</label>
                    <input className='border' type='text' name='bairro'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='rua'>Rua</label>
                    <input className='border' type='text' name='rua'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='numero'>Numero</label>
                    <input className='border' type='text' name='numero'/>
                </div>
                <div className='flex flex-col'>
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