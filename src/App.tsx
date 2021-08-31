import { FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState<string>()
  const [state, setState] = useState<string>()
  const [city, setCity] = useState<string>()
  const [neighborhood, setNeighborhood] = useState<string>()
  const [street, setStreet] = useState<string>()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log({ cep, state, city, neighborhood, street })
  }

  return (
    <div className='App'>
      <h1>Busca de CEP</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor='cep'>CEP</label>
          <div>
            <input
              id='cep'
              type='text'
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
            <button type='button'>Busca CEP</button>
          </div>
        </div>

        <div>
          <label htmlFor='state'>Estado</label>
          <input
            id='state'
            type='text'
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='city'>Cidade</label>
          <input
            id='city'
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='neighborhood'>Bairro</label>
          <input
            id='neighborhood'
            type='text'
            value={neighborhood}
            onChange={e => setNeighborhood(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='street'>Rua</label>
          <input
            id='street'
            type='text'
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
        </div>

        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default App
