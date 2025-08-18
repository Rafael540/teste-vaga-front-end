

import { NavLink } from 'react-router-dom';
import crown from '../../assets/CrownSimple.svg'

import './styles.scss'

export default function CategoryLink() {

    return (
        <>
            <nav className='ec-search-category'>

                <div className='ec-category'>
                    <div className='ec-category-list'>
                        <ul>
                            <NavLink
                                to="/todas as categorias"
                                className={({ isActive }) =>
                                    `ec-category-link ml70 ${isActive ? 'active' : ''}`
                                }
                            >
                                TODAS CATEGORIAS
                            </NavLink>

                            <NavLink
                                to="/supermercado"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                SUPERMERCADO
                            </NavLink>

                            <NavLink
                                to="/livros"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                LIVROS
                            </NavLink>

                            <NavLink
                                to="/moda"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                MODA
                            </NavLink>

                            <NavLink
                                to="/lancamentos"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                LANÇAMENTOS
                            </NavLink>

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                OFERTA DO DIA
                            </NavLink>

                            <NavLink
                                to="/assinaturas"
                                className={({ isActive }) =>
                                    `ec-category-link ${isActive ? 'active' : ''}`
                                }
                            >
                                <div style={{marginRight:'12px', width:'20px', height:'20px'}}>
                                    <img style={{ alignContent:'center', justifyContent:'center'}}className="ec-category-icon" src={crown} alt="assinaturas" />
                                </div>
                                    ASSINATURAS
                                

                            </NavLink>



                        </ul>
                    </div>

                </div >
            </nav>


        </>
    );

}