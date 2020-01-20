import React, { useState, useEffect } from 'react'
import './SideBar.css'
import './Main.css'
import api from './services/api'


function Main () {
  const [github_username, setGithubUsername] = useState('m4t3us89')
  const [techs, setTechs] = useState('Reactjs')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [devs, setDevs] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLongitude(longitude)
        setLatitude(latitude)
      },
      err => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  useEffect(()=>{
      async function loadDevs(){
        const response = await api.get('/devs')
        setDevs(response.data)
      }

      loadDevs()
  }, [])

  async function handleAddDev(e){
    e.preventDefault()

    try{
      const response = await api.post('/devs',{
        github_username,
        longitude,
        latitude,
        techs
      })

      setGithubUsername('')
      setTechs('')
      setDevs([...devs,response.data])
    }catch(err){
      console.log('error ' + err.data)
    }

  }

  return (
    <>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input name='github_username' id='github_username' required value={github_username} onChange={e=>setGithubUsername(e.target.value)}/>
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required value={techs} onChange={e=>setTechs(e.target.value)}/>
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input type='number' name='latitude'   id='latitude' required value={latitude} onChange={e=>setLatitude(e.target.value)}/>
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input type='number' name='longitude' id='longitude'  required value={longitude} onChange={e=>setLongitude(e.target.value)}/>
            </div>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          {devs.map(dev=>(
              <li key={dev._id} className='dev-item'>
              <header>
                <img
                  src={dev.avatar_url}
                  alt={dev.name}
                />
                <div className='user-info'>
                <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>
               {dev.bio}
              </p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Main
