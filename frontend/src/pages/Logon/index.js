import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import heroesPng from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID"/>
                    <button className="button" type="submit"> Entrar </button>

                    <a href="/register"> <FiLogIn size={16} color="#e02041" /> Não tem cadastro </a>
                </form>
            </section>

            <img src={heroesPng} alt="Heroes" />
        </div>
    )
}

export default Logon