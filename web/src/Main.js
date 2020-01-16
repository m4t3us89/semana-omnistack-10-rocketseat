import React, { useState } from 'react'
import './SideBar.css'
import './Main.css'

function Main (props) {
  return (
    <>
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input name='latitude' id='latitude' required />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars0.githubusercontent.com/u/32775082?v=4'
                alt='Allisson Mateus'
              />
              <div className='user-info'>
                <strong>Allisson Mateus</strong>
                <span>Reactjs, React Native, Nodejs</span>
              </div>
            </header>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href='https://github.com/m4t3us89'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars0.githubusercontent.com/u/32775082?v=4'
                alt='Allisson Mateus'
              />
              <div className='user-info'>
                <strong>Allisson Mateus</strong>
                <span>Reactjs, React Native, Nodejs</span>
              </div>
            </header>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href='https://github.com/m4t3us89'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars0.githubusercontent.com/u/32775082?v=4'
                alt='Allisson Mateus'
              />
              <div className='user-info'>
                <strong>Allisson Mateus</strong>
                <span>Reactjs, React Native, Nodejs</span>
              </div>
            </header>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href='https://github.com/m4t3us89'>Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars0.githubusercontent.com/u/32775082?v=4'
                alt='Allisson Mateus'
              />
              <div className='user-info'>
                <strong>Allisson Mateus</strong>
                <span>Reactjs, React Native, Nodejs</span>
              </div>
            </header>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href='https://github.com/m4t3us89'>Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Main
